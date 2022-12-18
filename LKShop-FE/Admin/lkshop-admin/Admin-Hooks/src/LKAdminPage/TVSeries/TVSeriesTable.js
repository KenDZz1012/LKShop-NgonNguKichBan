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
    Label, Button, TabContent,
    TabPane, CardText, Nav, NavItem, NavLink
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
import { getListTVEpisode, getTVEpisodeById, createTVEpisode, updateTVEpisode, deleteTVEpisode } from "helpers/app-backend/tvepisode-backend-helper";
import { getListTVSeason, getTVSeasonById, createTVSeason, updateTVSeason, deleteTVSeason } from "helpers/app-backend/tvseason-backend-helper";
import { Cell } from "recharts";
import Switch from 'react-switch'
import Select from 'react-select'
import ReactPlayer from "react-player";
import { AdvancedVideo } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";
//redux
import { fill } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import { Gravity } from "@cloudinary/url-gen/qualifiers";
import { AutoFocus } from "@cloudinary/url-gen/qualifiers/autoFocus";
import { quality } from "@cloudinary/url-gen/actions/delivery";
import classnames from "classnames";
import TVEpisodeTable from "./TVEpisodeTable";
import ReactLoading from 'react-loading';

const TVSeriesTable = () => {
    document.title = "SingleMovie";
    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dzetqrt71'
        }
    });

    const cld2 = new Cloudinary({
        cloud: {
            cloudName: 'dzetqrt71'
        }
    });
    // const myVideo = cld.video('Há___-_91562');

    // Apply the transformation.
    const [isLoading, setIsloading] = useState(false)
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
    const [moviePoster, setMoviePoster] = useState(null)
    const [movieList, setMovieList] = useState(null)
    const [defaultMovie, setDefaultMovie] = useState({})
    const [MovieVideo, setMovieVideo] = useState(null)
    const [activeTab1, setactiveTab1] = useState("1");
    const [listEpisode, setListEpisode] = useState([])
    const [dataEditMovie, setDataEditMovie] = useState(null)
    const [loading, setLoading] = useState(false)
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
            Header: "Poster",
            accessor: "Poster",
            Cell: (state) => (
                <div style={{ textAlign: "center" }}>
                    <img src={state.row._original.Poster} style={{ width: 44 }} />
                </div>
            ),
            width: 250,
        },
        {
            Header: "Movie Name",
            accessor: "MovieName",
            Cell: (state) => (
                <div style={{ textAlign: "center" }}>
                    {state.row._original.Movie.MovieName}
                </div>
            ),
            width: 250,
        },
        {
            Header: "Season",
            accessor: "Season",
            width: 250,
            id: "Birth"
        },
        {
            Header: "Rating",
            accessor: "Rating",
            width: 150,
        },
        {
            Header: "IsTrending",
            accessor: "IsTrending",
            width: 150,
        },
        {
            Header: "",
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


    const getListMovieHandler = async () => {
        await getListMovie(dataFilter).then(res => {
            if (res.isSuccess) {
                if (res.isSuccess) {
                    res.data.forEach(el => {
                        el.value = el._id
                        el.label = el.MovieName
                    });
                    setMovieList(res.data)
                }
            }
        })
    }


    const getListDataHandler = async () => {
        setLoading(true)
        await getListTVSeason(dataFilter).then(res => {
            if (res.isSuccess) {
                setLoading(false)
                setDataList(res.data)
            }
        })
    }

    const onClickEdit = async (id) => {
        setIsEdit(true)
        await getTVSeasonById(id).then(async (res) => {
            if (res.isSuccess) {
                setDataEdit(res.data)
                setDataEditMovie(res.data.Video)
                if (res.data.Movie) {
                    setDefaultMovie({
                        ...defaultMovie,
                        value: res.data.Movie._id,
                        label: res.data.Movie.MovieName
                    })

                }
                getListEpisode(id).then(setModal(true))
            }
        })
    }

    const getListEpisode = async (id) => {
        await getListTVEpisode(id).then(response => {
            if (response.isSuccess) {
                setListEpisode(response.data)
                setModal(true)
            }
        })
    }

    const onClickDelete = (id) => {
        setDeleteModal(true)
        setDataDel(id)
    }

    const deleteDataHandler = async () => {
        await deleteTVSeason(dataDel).then(res => {
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
        getListMovieHandler()
    }, [])

    const toggle = () => {
        setModal(false)
        setIsEdit(false)
        setChecked(false)
        setDataEdit({})
        setMoviePoster(null)
        setDataEditMovie(null)
        setactiveTab1("1");
    }
    const toggle1 = tab => {
        console.log(tab)
        if (activeTab1 !== tab) {
            setactiveTab1(tab);
        }
    };


    const handleSubmit = (e) => {
        setIsloading(true)
        const tvSeasonId = e.target["Id"].value
        const tvSeason = {
            Movie: e.target["Movie"].value,
            Season: e.target["Season"].value,
            Rating: e.target["Rating"].value,
            RateCount: e.target["RateCount"].value,
            ViewCount: e.target["ViewCount"].value,
            YearProduce: e.target["YearProduce"].value,
            Status: e.target["Status"].value,
            IsTrending: e.target["IsTrending"].value,
            Description: e.target["Description"].value,
            Poster: e.target["MoviePoster"].files[0],
            Trailer: e.target["MovieTrailer"].value,
        }
        const formData = new FormData();
        formData.append('Movie', tvSeason.Movie);
        formData.append('Season', tvSeason.Season)
        formData.append('Rating', tvSeason.Rating);
        formData.append("RateCount", tvSeason.RateCount)
        formData.append('ViewCount', tvSeason.ViewCount);
        formData.append('YearProduce', tvSeason.YearProduce);
        formData.append('Status', tvSeason.Status)
        formData.append('IsTrending', tvSeason.IsTrending);
        formData.append("TVPoster", tvSeason.Poster)
        formData.append('Trailer', tvSeason.Trailer);
        formData.append('Descriptiopn', tvSeason.Description)
        if (isEdit) {
            updateTVSeason(tvSeasonId, formData).then(res => {
                if (res.isSuccess) {
                    getListDataHandler()
                    setModal(false)
                    setDataEdit({})
                    setIsloading(false)
                }
            })
        }
        else {
            createTVSeason(formData).then(res => {
                if (res.isSuccess) {
                    getListDataHandler()
                    setModal(false)
                    setIsloading(false)
                }
            })
        }
        setMoviePoster(null)
        setDataEditMovie(null)
    }
    const onImageChange = (event) => {
        setMoviePoster(URL.createObjectURL(event.target.files[0]))
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
                    {!loading ?
                        <Row>
                            <Col lg="12">
                                <div >
                                    <div className="table-responsive">
                                        <ReactTable
                                            data={dataList}
                                            columns={columns}
                                            defaultPageSize={10}
                                        />
                                        {console.log(modal)}
                                        <Modal isOpen={modal} toggle={toggle} size="lg" style={{ maxWidth: '1600px', width: '100%', maxHeight: '600px' }}>
                                            {isLoading ? <div
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    zIndex: 5,
                                                    position: "absolute",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    background: "rgba(255,255,255,0.7)",
                                                    alignItems: "center",
                                                }}
                                            >
                                                {" "}
                                                <ReactLoading type={"spin"} color="#00a651" />
                                            </div> : <></>}
                                            <ModalHeader toggle={toggle} tag="h4">
                                                {!!isEdit ? "Edit Project" : "Add Project"}
                                            </ModalHeader>
                                            <ModalBody>
                                                <Nav pills className="navtab-bg nav-justified">
                                                    <NavItem>
                                                        <NavLink
                                                            style={{ cursor: "pointer" }}
                                                            className={classnames({
                                                                active: activeTab1 === "1",
                                                            })}
                                                            onClick={() => {
                                                                toggle1("1")
                                                            }}
                                                        >
                                                            Season
                                                        </NavLink>
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink
                                                            style={{ cursor: "pointer" }}
                                                            className={classnames({
                                                                active: activeTab1 === "2",
                                                            })}
                                                            onClick={() => {
                                                                toggle1("2")
                                                            }}
                                                        >
                                                            Episode
                                                        </NavLink>
                                                    </NavItem>
                                                </Nav>
                                                <TabContent
                                                    activeTab={activeTab1} className="pt-3 px-4 text-muted">
                                                    <TabPane tabId="1">
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
                                                                    <div className="mb-3" style={{ textAlign: "center" }}>
                                                                        <img src={dataEdit?.Poster || moviePoster} style={{ width: 100, marginLeft: 180 }} />
                                                                    </div>
                                                                    <Row>
                                                                        <Col xs={4} >

                                                                            <div className="mb-3">
                                                                                <Label className="form-label">Movie</Label>
                                                                                <Select
                                                                                    name={"Movie"}
                                                                                    closeMenuOnSelect={true}
                                                                                    defaultValue={
                                                                                        defaultMovie
                                                                                    }
                                                                                    options={movieList}
                                                                                />
                                                                            </div>

                                                                            <div className="mb-3">
                                                                                <Label className="form-label">Season</Label>
                                                                                <Input
                                                                                    name="Season"
                                                                                    type="Number"
                                                                                    defaultValue={dataEdit?.Season || ""}
                                                                                />
                                                                            </div>
                                                                            <div className="mb-3">
                                                                                <Label className="form-label">Rating</Label>
                                                                                <Input
                                                                                    name="Rating"
                                                                                    type="number"
                                                                                    defaultValue={dataEdit?.Rating || 0}
                                                                                />
                                                                            </div>
                                                                            <div className="mb-3">
                                                                                <Label className="form-label">RateCount</Label>
                                                                                <Input
                                                                                    name="RateCount"
                                                                                    type="number"
                                                                                    defaultValue={dataEdit?.RateCount || 0}
                                                                                />
                                                                            </div>
                                                                        </Col>
                                                                        <Col xs={4} >


                                                                            <div className="mb-3">
                                                                                <Label className="form-label">ViewCount</Label>
                                                                                <Input
                                                                                    name="ViewCount"
                                                                                    type="number"
                                                                                    defaultValue={dataEdit?.ViewCount || 0}
                                                                                />
                                                                            </div>
                                                                            <div className="mb-3">
                                                                                <Label className="form-label">YearProduce</Label>
                                                                                <Input
                                                                                    name="YearProduce"
                                                                                    type="number"
                                                                                    defaultValue={dataEdit?.YearProduce || 0}
                                                                                />
                                                                            </div>
                                                                            <div className="mb-3">
                                                                                <Label className="form-label">Status</Label>
                                                                                <Input
                                                                                    name="Status"
                                                                                    type="text"
                                                                                    defaultValue={dataEdit?.Status || ""}
                                                                                />
                                                                            </div>
                                                                            <div className="mb-3">
                                                                                <Label className="form-label">IsTrending</Label>
                                                                                <Input
                                                                                    name="IsTrending"
                                                                                    type="text"
                                                                                    defaultValue={dataEdit?.IsTrending || false}
                                                                                />
                                                                            </div>
                                                                        </Col>
                                                                        <Col xs={4} >


                                                                            <div className="mb-3">
                                                                                <Label className="form-label">Description</Label>
                                                                                <Input
                                                                                    name="Description"
                                                                                    type="textarea"
                                                                                    defaultValue={dataEdit?.Description || ""}
                                                                                />
                                                                            </div>
                                                                            <div className="mb-3">
                                                                                <Label className="form-label">Poster</Label>
                                                                                <Input
                                                                                    name="MoviePoster"
                                                                                    type="file"
                                                                                    // defaultValue={dataEdit?.Poster || ""}
                                                                                    onChange={onImageChange}
                                                                                />
                                                                            </div>
                                                                            <div className="mb-3">
                                                                                <Label className="form-label">Trailer</Label>
                                                                                <Input
                                                                                    name="MovieTrailer"
                                                                                    type="text"
                                                                                    defaultValue={dataEdit?.Trailer || ""}
                                                                                />
                                                                            </div>
                                                                        </Col>
                                                                    </Row>
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
                                                    </TabPane>

                                                    <TabPane tabId="2">
                                                        <TVEpisodeTable
                                                            data={listEpisode}
                                                            season={dataEdit?._id}
                                                            getListData={getListEpisode}
                                                            setIsLoading={setIsloading}
                                                        />
                                                    </TabPane>
                                                </TabContent>

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
            </div >
        </React.Fragment >
    );
};

export default withRouter(TVSeriesTable);
