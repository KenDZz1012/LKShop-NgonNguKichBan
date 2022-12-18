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
import { getListMovie, getMovieById, createMovie, updateMovie, deleteMovie } from "helpers/app-backend/movie-backend-helper";
import { getListCategory, getCategoryById, createCategory, updateCategory, deleteCategory } from "helpers/app-backend/category-backend-helper";
import { getListCelebrity, getCelebrityById, createCelebrity, updateCelebrity, deleteCelebrity } from "helpers/app-backend/celebrity-backend-helper";

import { Cell } from "recharts";
import Switch from 'react-switch'
import Select from 'react-select'

//redux

const MovieTable = () => {
    document.title = "Movie";

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
    const [dataCategory, setDataCategory] = useState([])
    const [dataCeleb, setDataCeleb] = useState([])
    const [defaultCategory, setDefaultCategory] = useState([])
    const [defaultActor, setDefaultActor] = useState([])
    const [defaultDirector, setDefaultDirector] = useState([])
    const [modalMovie, setModalMovie] = useState([false])
    const optionType = [
        {
            label: "Phim lẻ",
            value: "SingleMovie"
        },
        {
            label: "Phim bộ",
            value: "TVSeries"
        }
    ]
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
            accessor: "MovieName",
            width: 400,
        },
        {
            Header: "Category",
            accessor: "Category",
            width: 250,
            Cell: (state) => {
                return (
                    <div style={{ display: "flex", justifyContent: "space-between", overflow: "hidden", width: "100%" }}>
                        {state.row._original.Category.map((item,index) => (index<3?<div style={{ background: "#dbdbdb", padding: 6, width: 65, borderRadius: 9, textAlign: "center", overflow: "hidden" }} key={item.CategoryId}>{item.CategoryName}</div>:<></>))}
                    </div>
                );
            },
            id: "Category"
        },
        {
            Header: "Actor",
            accessor: "Actor",
            width: 250,
            Cell: (state) => {
                return (
                    <div style={{ display: "flex", justifyContent: "space-between", overflow: "hidden", width: "100%" }}>
                        {state.row._original.Actor.map((item, index) => (index < 3 ? <div style={{ background: "#dbdbdb", padding: 6, width: 65, borderRadius: 9, textAlign: "center", overflow: "hidden" }} key={item.CelebrityId}>{item.FullName}</div> : <></>))}
                    </div>
                );
            },
            id: "Actor"
        },
        {
            Header: "Director",
            accessor: "Director",
            width: 250,
            Cell: (state) => {
                return (
                    <div style={{ display: "flex", justifyContent: "space-between", overflow: "hidden", width: "100%" }}>
                        {state.row._original.Director.map((item) => (<div style={{ background: "#dbdbdb", padding: 6, width: 65, borderRadius: 9, textAlign: "center", overflow: "hidden" }} key={item.CelebrityId}>{item.FullName}</div>))}
                    </div>
                );
            },
            id: "Director"
        },
        {
            Header: "Type",
            accessor: "Type",
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
        await getListMovie(dataFilter).then(res => {
            if (res.isSuccess) {
                setDataList(res.data)
            }
        })
    }

    const getListCategoryHandler = async () => {
        await getListCategory(dataFilter).then(res => {
            if (res.isSuccess) {
                res.data.forEach(el => {
                    el.value = el._id
                    el.label = el.CategoryName
                });
                setDataCategory(res.data)
            }
        })
    }

    const getListCelebHandler = async () => {
        await getListCelebrity(dataFilter).then(res => {
            if (res.isSuccess) {
                res.data.forEach(el => {
                    el.value = el._id
                    el.label = el.FullName
                });
                setDataCeleb(res.data)
            }
        })
    }

    const onClickEdit = (id) => {
        setIsEdit(true)
        let arrCat = []
        let arrActor = []
        let arrDirector = []
        let itemCat = {}
        let itemActor = {}
        let itemDirector = {}
        getMovieById(id).then(res => {
            if (res.isSuccess) {
                if (res.data.Category.length > 0) {
                    res.data.Category.map(ele => {
                        itemCat.value = ele._id
                        itemCat.label = ele.CategoryName
                        arrCat.push(itemCat)
                        itemCat = {}
                    })
                }
                if (res.data.Actor.length > 0) {
                    res.data.Actor.map(ele => {
                        itemActor.value = ele._id
                        itemActor.label = ele.FullName
                        arrActor.push(itemActor)
                        itemActor = {}
                    })
                }
                if (res.data.Director.length > 0) {
                    res.data.Director.map(ele => {
                        itemDirector.value = ele._id
                        itemDirector.label = ele.FullName
                        arrDirector.push(itemDirector)
                        itemDirector = {}
                    })
                }
                setDataEdit(res.data)
                setDefaultCategory(arrCat)
                setDefaultActor(arrActor)
                setDefaultDirector(arrDirector)
                setModal(true)
            }
        })
    }

    const onClickDelete = (id) => {
        setDeleteModal(true)
        setDataDel(id)
    }

    const deleteDataHandler = async () => {
        deleteMovie(dataDel).then(res => {
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
        getListCategoryHandler()
        getListCelebHandler()
    }, [])

    const toggle = () => {
        setModal(false)
        setIsEdit(false)
        setChecked(false)
        setDataEdit({})
        setImageClient(null)

    }

    const handleSubmit = (e) => {
        const MovieId = e.target["Id"].value
        const Category = []
        const Actor = []
        const Director = []
        e.target["Category"].forEach(item => {
            Category.push(item.value)
        })
        e.target["Actor"].forEach(item => {
            Actor.push(item.value)
        })
        e.target["Director"].forEach(item => {
            Director.push(item.value)
        })

        const Movie = {
            MovieName: e.target["MovieName"].value,
            Category: Category,
            Actor: Actor,
            Director: Director,
            Type: e.target["Type"].value,
            Country: e.target["Country"].value
        }
        if (isEdit) {
            updateMovie(MovieId, Movie).then(res => {
                if (res.isSuccess) {
                    getListDataHandler()
                    setModal(false)
                    setDataEdit({})
                }
            })
        }
        else {
            createMovie(Movie).then(res => {
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
                                                                <Label className="form-label">MovieName</Label>
                                                                <Input
                                                                    name="MovieName"
                                                                    type="text"
                                                                    defaultValue={dataEdit?.MovieName || ""}
                                                                />
                                                            </div>
                                                            <div className="mb-3">
                                                                <Label className="form-label">Category</Label>
                                                                <Select
                                                                    name={"Category"}
                                                                    closeMenuOnSelect={false}
                                                                    defaultValue={
                                                                        defaultCategory
                                                                    }
                                                                    isMulti
                                                                    options={dataCategory}
                                                                />
                                                            </div>

                                                            <div className="mb-3">
                                                                <Label className="form-label">Actor</Label>
                                                                <Select
                                                                    name={"Actor"}
                                                                    closeMenuOnSelect={false}
                                                                    defaultValue={
                                                                        defaultActor
                                                                    }
                                                                    isMulti
                                                                    options={dataCeleb}
                                                                />
                                                            </div>

                                                            <div className="mb-3">
                                                                <Label className="form-label">Director</Label>
                                                                <Select
                                                                    name={"Director"}
                                                                    closeMenuOnSelect={false}
                                                                    defaultValue={
                                                                        defaultDirector
                                                                    }
                                                                    isMulti
                                                                    options={dataCeleb}
                                                                />
                                                            </div>
                                                            <div className="mb-3">
                                                                <Label className="form-label">Type</Label>

                                                                <Select
                                                                    name={"Type"}
                                                                    closeMenuOnSelect={false}
                                                                    defaultValue={
                                                                        optionType.filter(el => el.value == dataEdit?.Type)
                                                                    }
                                                                    options={optionType}
                                                                />
                                                            </div>

                                                            <div className="mb-3">
                                                                <Label className="form-label">Country</Label>

                                                                <Input
                                                                    name="Country"
                                                                    type="text"
                                                                    defaultValue={dataEdit?.Country || ""}
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

export default withRouter(MovieTable);
