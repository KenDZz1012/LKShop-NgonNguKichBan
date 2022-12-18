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
import { getListCategory, getCategoryById, createCategory, updateCategory, deleteCategory } from "helpers/app-backend/category-backend-helper";
import { Cell } from "recharts";
import Switch from 'react-switch'

//redux

const CategoryTable = () => {
  document.title = "Category";

  const [dataList, setDataList] = useState([])
  const [dataFilter, setDataFilter] = useState()
  const [deleteModal, setDeleteModal] = useState(false)
  const [paginate, setPaginate] = useState({
    page: 1,
    size: 10
  })
  const [modal, setModal] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [dataEdit, setDataEdit] = useState()
  const [dataDel, setDataDel] = useState("")
  const [checked, setChecked] = useState(false)
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
      accessor: "CategoryName",
      width: 250,
    },
    {
      Header: "Trạng thái",
      accessor: "IsOnMenu",
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



  const getListDataHandler = async () => {
    await getListCategory(dataFilter).then(res => {
      if (res.isSuccess) {
        setDataList(res.data)
      }
    })
  }

  const onClickEdit = (id) => {
    setIsEdit(true)
    getCategoryById(id).then(res => {
      if (res.isSuccess) {
        setDataEdit(res.data)
      }
    })
    setModal(true)
  }

  const onClickDelete = (id) => {
    setDeleteModal(true)
    setDataDel(id)
  }

  const deleteDataHandler = async () => {
    deleteCategory(dataDel).then(res => {
      if (res.isSuccess) {
        getListDataHandler()
        setDeleteModal(false)
      }
    })
  }

  const onClickCreate = () => {
    setModal(true)
    setIsEdit(false)
  }

  useEffect(() => {
    getListDataHandler()
  }, [])

  const toggle = () => {
    setModal(false)
    setIsEdit(false)
    setChecked(false)
    setDataEdit({})
  }

  const handleSubmit = (e) => {
    const categoryId = e.target["Id"].value
    const category = {
      CategoryName: e.target["CategoryName"].value,
      IsOnMenu: e.target["IsOnMenu"].checked,
    }
    console.log(e.target["IsOnMenu"])
    if (isEdit) {
      updateCategory(categoryId, category).then(res => {
        if (res.isSuccess) {
          getListDataHandler()
          setModal(false)
          setDataEdit({})
        }
      })
    }
    else {
      createCategory(category).then(res => {
        if (res.isSuccess) {
          getListDataHandler()
          setModal(false)
        }
      })
    }
  }

  return (
    <React.Fragment>
      <DeleteModal
        show={deleteModal}
        onDeleteClick={deleteDataHandler}
        onCloseClick={() => setDeleteModal(false)}
      />
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Projects" breadcrumbItem="User Management" />
          <Button onClick={onClickCreate}>Thêm mới</Button>
          {dataList.length > 0 ?
            <Row>
              <Col lg="12">
                <div >
                  <div className="table-responsive">
                    <ReactTable
                      data={dataList}
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
                                  defaultValue={dataEdit?._id || ""}
                                />
                              </div>
                              <div className="mb-3">
                                <Label className="form-label">CategoryName</Label>
                                <Input
                                  name="CategoryName"
                                  type="text"
                                  defaultValue={dataEdit?.CategoryName || ""}
                                />
                              </div>
                              <div className="mb-3" >
                                <Label className="form-label">IsOnMenu</Label>
                                <Input type="checkbox" name="IsOnMenu" defaultChecked={dataEdit?.IsOnMenu}  />
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

export default withRouter(CategoryTable);
