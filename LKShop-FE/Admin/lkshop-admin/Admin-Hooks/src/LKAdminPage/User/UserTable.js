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
import { getListUser, getUserById, createUser, updateUser, deleteUser } from "helpers/app-backend/user-backend-helper";
import { Cell } from "recharts";

//redux

const UserTable = () => {
  document.title = "User";

  const [userList, setUserList] = useState([])
  const [userFilter, setUserFilter] = useState()
  const [deleteModal, setDeleteModal] = useState(false)
  const [paginate, setPaginate] = useState({
    page: 1,
    size: 10
  })
  const [modal, setModal] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [userEdit, setUserEdit] = useState()
  const [userDel, setUserDel] = useState("")
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
      Header: "Họ tên",
      accessor: "FullName",
      width: 250,
    },
    {
      Header: "Tài khoản",
      accessor: "UserName",
      width: 250,
    },
    {
      Header: "Email",
      filterable: true,
      accessor: "Email",
      width: 250,
    },
    {
      Header: "Giới tính",
      filterable: true,
      accessor: "Sex",
      width: 150,
    },
    {
      Header: "DOB",
      filterable: true,
      accessor: "Dob",
      Cell: (state) => (
        <div>{state.row._original.Dob ? new Date(state.row._original.Dob).toLocaleDateString("en-GB") : <></>}</div>
      ),
      width: 250,
    },
    {
      Header: "Trạng thái",
      filterable: false,
      accessor: "Status",
      width: 150,
      Cell: (state) => (
        state.row._original.Status == true ? <div style={{ background: "#3bed3b", width: 16, height: 16, borderRadius: 20 }}></div> : <div style={{ background: "yellow", width: 16, height: 16, borderRadius: 20 }}></div>
      )
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



  const getListUserHandler = async () => {
    await getListUser(userFilter).then(res => {
      if (res.isSuccess) {
        setUserList(res.data)
      }
    })
  }

  const onClickEdit = (id) => {
    setIsEdit(true)
    getUserById(id).then(res => {
      if (res.isSuccess) {
        setUserEdit(res.data)
      }
    })
    setModal(true)
  }

  const onClickDelete = (id) => {
    setDeleteModal(true)
    setUserDel(id)
  }

  const deleteUserHandler = async () => {
    deleteUser(userDel).then(res => {
      if (res.isSuccess) {
        getListUserHandler()
        setDeleteModal(false)
      }
    })
  }

  const onClickCreate = () => {
    setModal(true)
    setIsEdit(false)
  }

  useEffect(() => {
    getListUserHandler()
  }, [])

  const toggle = () => {
    setModal(false)
    setIsEdit(false)
    setUserEdit({})
  }

  const handleSubmit = (e) => {
    const userId = e.target["Id"].value
    const user = {
      FullName: e.target["FullName"].value,
      UserName: e.target["UserName"].value,
      Password: !isEdit ? e.target["Password"].value : "",
      Email: e.target["Email"].value,
      Sex: e.target["Sex"].value,
      Dob: e.target["Dob"].value,
      Status: e.target["Status"].value == "Active" ? true : false
    }
    if (isEdit) {
      delete user.Password
      updateUser(userId, user).then(res => {
        if (res.isSuccess) {
          getListUserHandler()
          setModal(false)
        }
      })
    }
    else {
      createUser(user).then(res => {
        if (res.isSuccess) {
          getListUserHandler()
          setModal(false)
        }
      })
    }
  }

  return (
    <React.Fragment>
      <DeleteModal
        show={deleteModal}
        onDeleteClick={deleteUserHandler}
        onCloseClick={() => setDeleteModal(false)}
      />
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Projects" breadcrumbItem="User Management" />
          <Button onClick={onClickCreate}>Thêm mới</Button>
          {userList.length > 0 ?
            <Row>
              <Col lg="12">
                <div >
                  <div className="table-responsive">
                    <ReactTable
                      data={userList}
                      columns={columns}
                      defaultPageSize={10}
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
                                  defaultValue={userEdit?._id || ""}
                                />
                              </div>
                              <div className="mb-3">
                                <Label className="form-label">FullName</Label>
                                <Input
                                  name="FullName"
                                  type="text"
                                  defaultValue={userEdit?.FullName || ""}
                                />
                              </div>
                              <div className="mb-3">
                                <Label className="form-label">UserName</Label>
                                <Input
                                  type="text"
                                  name="UserName"
                                  defaultValue={userEdit?.UserName || ""}
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
                                  defaultValue={userEdit?.Email || ""}
                                />

                              </div>

                              <div className="mb-3">
                                <Label className="form-label">Gender</Label>
                                <Input type="radio" value="Male" name="Sex" style={{ marginLeft: 12 }} defaultChecked={userEdit?.Sex == "Male" ? true : false} /> Male
                                <Input type="radio" value="Female" name="Sex" style={{ marginLeft: 12 }} defaultChecked={userEdit?.Sex == "Female" ? true : false} /> Female
                              </div>

                              <div className="mb-3">
                                <Label className="form-label">Status</Label>
                                <Input
                                  name="Status"
                                  id="Status"
                                  type="select"
                                  className="form-select"
                                >
                                  <option>Active</option>
                                  <option>InActive</option>
                                </Input>
                              </div>

                              <div className="mb-3">
                                <Label className="form-label">DOB</Label>
                                <Input
                                  name="Dob"
                                  type="date"
                                  format="YYYY/DD/MM"
                                  defaultValue={userEdit?.Dob ? new Date(userEdit.Dob).toISOString().slice(0, 10) : ""}
                                />
                              </div>
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

export default withRouter(UserTable);
