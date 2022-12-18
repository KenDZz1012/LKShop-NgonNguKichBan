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
import { getListCelebrity, getCelebrityById, createCelebrity, updateCelebrity, deleteCelebrity } from "helpers/app-backend/celebrity-backend-helper";
import { Cell } from "recharts";
import Switch from 'react-switch'

//redux

const CelebrityTable = () => {
    document.title = "Celebrity";

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
                    <img src={state.row._original.Avatar} style={{ width: 44, height: 44, borderRadius: "50%" }} />
                </div>
            ),
            width: 250,
        },
        {
            Header: "Họ tên",
            accessor: "FullName",
            width: 250,
        },
        {
            Header: "Ngày sinh",
            accessor: "Birth",
            width: 250,
            Cell: (state) => (
                <div>{state.row._original.Birth ? new Date(state.row._original.Birth).toLocaleDateString("en-GB") : <></>}</div>
            ),
            id: "Birth"
        },
        {
            Header: "Role",
            accessor: "Role",
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
        await getListCelebrity(dataFilter).then(res => {
            if (res.isSuccess) {
                setDataList(res.data)
            }
        })
    }

    const onClickEdit = (id) => {
        setIsEdit(true)
        getCelebrityById(id).then(res => {
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
        deleteCelebrity(dataDel).then(res => {
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
        setImageClient(null)

    }

    const handleSubmit = (e) => {
        const celebrityId = e.target["Id"].value
        const celebrity = {
            FullName: e.target["FullName"].value,
            ShortName: e.target["ShortName"].value,
            Role: e.target["Role"].value,
            CelebrityAvatar: e.target["CelebrityAvatar"].files[0],
            Birth: e.target["Birth"].value,
        }
        const formData = new FormData();
        formData.append('FullName', celebrity.FullName);
        formData.append('ShortName', celebrity.ShortName)
        formData.append('Role', celebrity.Role);
        formData.append("CelebrityAvatar", celebrity.CelebrityAvatar)
        formData.append('Birth', celebrity.Birth);
        if (isEdit) {
            updateCelebrity(celebrityId, formData).then(res => {
                if (res.isSuccess) {
                    getListDataHandler()
                    setModal(false)
                    setDataEdit({})
                }
            })
        }
        else {
            createCelebrity(formData).then(res => {
                if (res.isSuccess) {
                    getListDataHandler()
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
                                                                <Label className="form-label">FullName</Label>
                                                                <Input
                                                                    name="FullName"
                                                                    type="text"
                                                                    defaultValue={dataEdit?.FullName || ""}
                                                                />
                                                            </div>
                                                            <div className="mb-3">
                                                                <Label className="form-label">ShortName</Label>
                                                                <Input
                                                                    name="ShortName"
                                                                    type="text"
                                                                    defaultValue={dataEdit?.ShortName || ""}
                                                                />
                                                            </div>
                                                            <div className="mb-3">
                                                                <Label className="form-label">Role</Label>
                                                                <Input
                                                                    name="Role"
                                                                    type="text"
                                                                    defaultValue={dataEdit?.Role || ""}
                                                                />
                                                            </div>
                                                            <div className="mb-3">
                                                                <Label className="form-label">Birth</Label>
                                                                <Input
                                                                    name="Birth"
                                                                    type="date"
                                                                    format="YYYY/DD/MM"
                                                                    defaultValue={dataEdit?.Birth ? new Date(dataEdit.Birth).toISOString().slice(0, 10) : ""}
                                                                />
                                                            </div>
                                                            <div className="mb-3">
                                                                <Label className="form-label">Avatar</Label>
                                                                <Input
                                                                    name="CelebrityAvatar"
                                                                    type="file"
                                                                    defaultValue={dataEdit?.Avatar || ""}
                                                                    onChange={onImageChange}
                                                                />
                                                            </div>
                                                            <img src={dataEdit?.Avatar || imageClient} style={{ width: 100, marginLeft: 180 }} />

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

export default withRouter(CelebrityTable);
