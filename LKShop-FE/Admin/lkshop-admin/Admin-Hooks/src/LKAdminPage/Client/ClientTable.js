import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { isEmpty, map } from "lodash";
import * as moment from "moment";
import {
  Badge,
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  Table,
  UncontrolledDropdown,
  UncontrolledTooltip,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Input,
  FormFeedback,
  Label, Button
} from "reactstrap";
import * as Yup from "yup";
import { useFormik } from "formik";

//Import Component
import Breadcrumbs from "components/Common/Breadcrumb";
import DeleteModal from "components/Common/DeleteModal";

//Import Image
import images from "assets/images";
import companies from "assets/images/companies";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import { getListClient, getClientById, createClient, updateClient, deleteClient } from "helpers/app-backend/client-backend-helper";
import { Cell } from "recharts";
import Switch from 'react-switch'
import axios from "axios";

//redux

const ClientTable = () => {
  document.title = "Client";

  const [ClientList, setClientList] = useState([])
  const [ClientFilter, setClientFilter] = useState()
  const [deleteModal, setDeleteModal] = useState(false)
  const [paginate, setPaginate] = useState({
    page: 1,
    size: 10
  })
  const [modal, setModal] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [ClientEdit, setClientEdit] = useState()
  const [ClientDel, setClientDel] = useState("")
  const [imageClient, setImageClient] = useState(null)
  const columns = [
    {
      Header: "STT",
      id: "stt",
      accessor: "stt",
      sortable: false,
      filterable: false,
      Cell: (data) => {
        return data.page * data.pageSize + data.viewIndex + 1;
      },
      width: 50,
    },
    {
      Header: "Avatar",
      accessor: "Avatar",
      Cell: (state) => (
        <div style={{ textAlign: "center" }}>
          <img src={state.row._original.Avatar} style={{ borderRadius: "50%", height: 44, width: 44 }} />
        </div>
      ),
      width: 250,
    },
    {
      Header: "Tài khoản",
      accessor: "UserName",
      filterable: true,
      width: 250,
    },
    {
      Header: "Email",
      filterable: true,
      accessor: "Email",
      width: 250,
    },
    {
      Header: "Thành viên",
      accessor: "IsPayment",
      Cell: ({ value }) => {
        return <Switch onChange={() => { }} checked={value} disabled />;
      },
      width: 150,
    },
    {
      Header: "Action",
      width: 200,
      id: "action",
      Cell: (state) => (
        <UncontrolledDropdown>
          <DropdownToggle
            href="#"
            className="card-drop"
            tag="i"
          >
            <i className="mdi mdi-dots-horizontal font-size-18" />
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-end" style={{ position: "relative !important" }}>
            <DropdownItem
              href="#"
              onClick={() => onClickEdit(state.row._original._id)}
            >
              <i className="mdi mdi-pencil font-size-16 text-success me-1" />{" "}
              Edit
            </DropdownItem>
            <DropdownItem
              href="#"
              onClick={() => onClickDelete(state.row._original._id)}
            >
              <i className="mdi mdi-trash-can font-size-16 text-danger me-1" />{" "}
              Delete
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>

      )
    }
  ]



  const getListClientHandler = async () => {
    await getListClient(ClientFilter).then(res => {
      if (res.isSuccess) {
        setClientList(res.data)
      }
    })
  }

  const onClickEdit = (id) => {
    setIsEdit(true)
    getClientById(id).then(res => {
      if (res.isSuccess) {
        setClientEdit(res.data)
      }
    })
    setModal(true)
  }

  const onClickDelete = (id) => {
    setDeleteModal(true)
    setClientDel(id)
  }

  const deleteClientHandler = async () => {
    deleteClient(ClientDel).then(res => {
      if (res.isSuccess) {
        getListClientHandler()
        setDeleteModal(false)
      }
    })
  }

  const onClickCreate = () => {
    setModal(true)
    setIsEdit(false)
  }

  useEffect(() => {
    getListClientHandler()
  }, [])

  const toggle = () => {
    setModal(false)
    setIsEdit(false)
    setImageClient(null)
    setClientEdit({})
  }

  const handleSubmit = async (e) => {
    const ClientId = e.target["Id"].value
    const Client = {
      UserName: e.target["UserName"].value,
      Password: !isEdit ? e.target["Password"].value : "",
      Email: e.target["Email"].value,
      ClientAvatar: e.target["ClientAvatar"].files[0]
    }

    const formData = new FormData();
    formData.append('UserName', Client.UserName);
    formData.append('Password', Client.Password)
    formData.append('Email', Client.Email);
    formData.append("ClientAvatar", Client.ClientAvatar)
    if (isEdit) {
      delete (Client.Password)
      await updateClient(ClientId, formData).then(res => {
        if (res.isSuccess) {
          getListClientHandler()
          setModal(false)
        }
      })
    }
    else {
      await createClient(formData).then(res => {
        if (res.isSuccess) {
          getListClientHandler()
          setModal(false)
        }
      })
    }
  }

  const onImageChange = (event) => {
    setImageClient(URL.createObjectURL(event.target.files[0]))
  }

  return (
    <React.Fragment>
      <DeleteModal
        show={deleteModal}
        onDeleteClick={deleteClientHandler}
        onCloseClick={() => setDeleteModal(false)}
      />
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} tag="h4">
          {!!isEdit ? "Edit Project" : "Add Project"}
        </ModalHeader>
        <ModalBody>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(e);
              return false;
            }}
          >
            <Row form>
              <Col xs={12}>
                <div className="mb-3">
                  <Input
                    name="Id"
                    type="hidden"
                    defaultValue={ClientEdit?._id || ""}
                  />
                </div>
                <div className="mb-3">
                  <Label className="form-label">ClientName</Label>
                  <Input
                    type="text"
                    name="UserName"
                    defaultValue={ClientEdit?.UserName || ""}
                  />
                </div>

                {!isEdit ? <div className="mb-3">
                  <Label className="form-label">Password</Label>
                  <Input
                    name="Password"
                    type="Password"
                  />
                </div> : <></>}
                <div className="mb-3">
                  <Label className="form-label">Email</Label>
                  <Input
                    name="Email"
                    type="text"
                    defaultValue={ClientEdit?.Email || ""}
                  />
                </div>
                <div className="mb-3">
                  <Label className="form-label">Avatar</Label>
                  <Input
                    name="ClientAvatar"
                    type="file"
                    defaultValue={ClientEdit?.Avatar || ""}
                    onChange={onImageChange}
                  />
                </div>
                <img src={ClientEdit?.Avatar || imageClient} style={{ width: 100, marginLeft: 180 }} />

              </Col>


            </Row>
            <Row>
              <Col>
                <div className="text-end">
                  <button
                    type="submit"
                    className="btn btn-success save-user"
                  >
                    Save
                  </button>
                </div>
              </Col>
            </Row>
          </Form>
        </ModalBody>
      </Modal>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Projects" breadcrumbItem="Client Management" />
          <Button onClick={onClickCreate}>Thêm mới</Button>
          {ClientList.length > 0 ?
            <Row>
              <Col lg="12">
                <div >
                  <div className="table-responsive">
                    <ReactTable
                      data={ClientList}
                      columns={columns}
                      defaultPageSize={10}
                    />

                  </div>
                </div>
              </Col>
            </Row>
            :
            <Row>
              <Col xs="12">
                <div className="text-center my-3">
                  <Link to="#" className="text-success">
                    <i className="bx bx-loader bx-spin font-size-18 align-middle me-2" />
                    Load more
                  </Link>
                </div>
              </Col>
            </Row>}
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withRouter(ClientTable);
