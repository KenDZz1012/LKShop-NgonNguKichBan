import React, { useState } from "react";
import { useSSR } from "react-i18next";
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
    TabPane, CardText, Nav, NavItem, NavLink, Card, CardBody, CardTitle
} from "reactstrap";
import { getListTVEpisode, getTVEpisodeById, createTVEpisode, updateTVEpisode, deleteTVEpisode } from "helpers/app-backend/tvepisode-backend-helper";

export default function TVEpisodeTable({ data, season, getListData,setIsLoading }) {
    const [isHover, setIsHover] = useState(null)
    const [isEdit, setIsEdit] = useState(false)
    const [dataEdit, setDataEdit] = useState()
    const [MovieVideo, setMovieVideo] = useState(null)

    const handleMouseEnter = key => {
        setIsHover(key);
    };
    const handleMouseLeave = episode => {
        setIsHover(null);
    };
    const onVideoChange = (e) => {
        let reader = new FileReader();
        let selectedFile = e.target.files[0];
        reader.readAsDataURL(selectedFile);
        reader.onload = (readerEvent) => {
            setMovieVideo(readerEvent.target.result);
        };
    }
    const getDetailEpisode = async (id) => {
        setIsEdit(true)
        await getTVEpisodeById(id).then(res => {
            if (res.isSuccess) {
                setDataEdit(res.data)
            }
        })
    }

    const handleSubmit = (e) => {
        setIsLoading(true)
        const episodeId = e.target["Id"].value
        const singleMovie = {
            TVSeason: season,
            RunTime: e.target["RunTime"].value,
            Episode: e.target["Episode"].value,
            EpisodeName: e.target["EpisodeName"].value,
            Video: e.target["MovieVideo"].files[0],
        }
        const formData = new FormData();
        formData.append('TVSeason', singleMovie.TVSeason);
        formData.append('RunTime', singleMovie.RunTime);
        formData.append("Episode", singleMovie.Episode);
        formData.append("EpisodeName", singleMovie.EpisodeName);
        formData.append('TVVideo', singleMovie.Video);
        if (isEdit) {
            updateTVEpisode(episodeId, formData).then(res => {
                if (res.isSuccess) {
                    getListData(season)
                    setDataEdit()
                    setIsLoading(false)
                }
            })
        }
        else {
            createTVEpisode(formData).then(res => {
                if (res.isSuccess) {
                    getListData(season)
                    setIsLoading(false)
                }
            })
        }
        setMovieVideo(null)
    }
    return (
        <React.Fragment>
            <Row>
                <Col xs={4}>
                    <div style={{ height: "680px", overflowY: "auto" }}>
                        {data?.map((element, index) => {
                            return (
                                <div key={index}
                                    onMouseEnter={() => { handleMouseEnter(index) }}
                                    onMouseLeave={() => { handleMouseLeave(index) }}
                                    onClick={() => { getDetailEpisode(element._id) }}
                                    style={{ marginTop: -20, display: "flex", flexDirection: 'column', borderBottom: "1px solid #ccc", padding: 40, background: isHover == index ? "#f1f1f1" : "white" }}>
                                    <p style={{ fontWeight: "bold" }}>Episode {element.Episode}: {element.EpisodeName}</p>
                                    <video controls src={element.VideoUrl} width={370} style={{ marginTop: 10 }} type="video/mp4">
                                    </video>
                                </div>
                            )
                        })}
                    </div>
                </Col>
                <Col xs={8}>
                    <Card>
                        <CardTitle>
                            <p>Information </p>
                            {isEdit ? <button className="btn btn-warning save-user" onClick={() => { setIsEdit(false), setDataEdit() }}>Add New</button> : <></>}
                        </CardTitle>
                        <CardBody>
                            <Form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSubmit(e);
                                    return false;
                                }}
                            >
                                <div className="mb-3">
                                    <Input
                                        name="Id"
                                        type="hidden"
                                        defaultValue={dataEdit?._id || ""}
                                    />
                                </div>
                                <Row>
                                    <Col xs={6}>
                                        <div className="mb-3">
                                            <Label className="form-label">Episode</Label>
                                            <Input
                                                name="Episode"
                                                type="Number"
                                                defaultValue={dataEdit?.Episode}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <Label className="form-label">Episode Name</Label>
                                            <Input
                                                name="EpisodeName"
                                                type="text"
                                                defaultValue={dataEdit?.EpisodeName}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <Label className="form-label">Run Time</Label>
                                            <Input
                                                name="RunTime"
                                                type="text"
                                                defaultValue={dataEdit?.RunTime}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <Label className="form-label">Video</Label>
                                            <Input
                                                name="MovieVideo"
                                                type="file"
                                                // defaultValue={dataEdit?.Video || ""}
                                                onChange={onVideoChange}
                                            />
                                        </div>

                                    </Col>

                                    <Col xs={6}>
                                        {
                                            MovieVideo ?
                                                <video controls src={MovieVideo} width="400" type="video/mp4">
                                                </video> : <></>
                                        }
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
                        </CardBody>
                    </Card>

                </Col>
            </Row>
        </React.Fragment>
    )
}