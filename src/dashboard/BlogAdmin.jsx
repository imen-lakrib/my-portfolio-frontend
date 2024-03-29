import axios from 'axios';
// react 
import { useEffect, useState } from 'react';

// material 
import {
    Card, Table, Stack, Avatar, Button, TableRow, TableBody, TableCell, Typography, TableContainer,
    TablePagination, Box, TableHead, CircularProgress, Container,
    OutlinedInput, InputAdornment, IconButton, FormControl, Grid, DialogActions,
    Dialog, TextField, DialogContent, DialogTitle
} from '@mui/material';

import DownloadingIcon from '@mui/icons-material/Downloading';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { Edit, Search } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import { API_URL } from '../../ApiConfig';

// components
// Api




export default function BlogAdmin() {
    useEffect(() => {
        getBlogs()
    }, [])

    const getBlogs = () => {
        setLoading(true)
        axios.get(API_URL+'blog')
            .then(res => {
                setBlogs(res.data)
                setLoading(false)
                setConnectionErr(false)
            })
            .catch((err) => {
                setLoading(false)
                setConnectionErr(true)
            });
    }



    // data
    const [loading, setLoading] = useState(false)
    const [selected, setSelected] = useState({})
    const [blogs, setBlogs] = useState([])


    const [imen, setImen] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [author, setAuthor] = useState("")
    const [technologies, setTechnologies] = useState("")




    //table UI
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - blogs.length) : 0;
    const [connectionErr, setConnectionErr] = useState(false)
    const [search, setSearch] = useState('')
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const TableHeadTitles = [
        { align: "left", name: "imen" },
        { align: "left", name: "title" },
        { align: "left", name: "description" },

        { align: "left", name: "author" },
        { align: "left", name: "technologies" },

        { align: "center", name: "Actions" },
    ]
    ////////////////////////////////////////////////////////////





    // form of delete
    const [openDelete, setOpenDelete] = useState(false);
    const handleClickOpenDelete = () => {
        setOpenDelete(true);
    };

    function DeleteRaison() {
        const handleSubmitDelete = () => {
            deleteData()
            handleCloseDelete()
        };


        const handleCloseDelete = () => {
            setOpenDelete(false);
        };

        console.log(selected)

        return (
            <Dialog
                open={openDelete}
                onClose={handleCloseDelete}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                    êtes-vous sûr de vouloir supprimer ?
                </DialogTitle>
                <DialogContent >

                    <Typography>{selected.name}</Typography>

                    <DialogActions>
                        <Button onClick={handleCloseDelete} autoFocus>Cancel</Button>
                        <Button onClick={handleSubmitDelete}>Confirmer</Button>
                    </DialogActions>

                </DialogContent>
            </Dialog>
        )
    }
    /////////////////////////////////////////////////////////////////////////////
    // form of edit 
    const [openEdit, setOpenEdit] = useState(false);
    const handleClickOpenEdit = (row) => {
        setTitle(row.title)
        setTechnologies(row.technologies)
        setDescription(row.description)
        setAuthor(row.author)
        setOpenEdit(true)
    };

    const handleSubmitEdit = () => {
        editData()
        handleCloseEdit()
    };
    const handleCloseEdit = () => {
        setOpenEdit(false);
    };

    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    // form of edit avatar
    const [openEditAvatar, setOpenEditAvatar] = useState(false);
    const handleClickOpenEditAvatar = (row) => {
        setImen(row.imen)
        setOpenEditAvatar(true)
    };

    const handleSubmitEditAvatar = () => {
        editAvatar()
        handleCloseEditAvatar()
    };
    const handleCloseEditAvatar = () => {
        setOpenEditAvatar(false);
    };

    /////////////////////////////////////////////////////////////////////////////
    // form of add 
    const [openAdd, setOpenAdd] = useState(false);
    const handleClickOpenAdd = () => {
        setTitle("")
        setDescription("")
        setTechnologies("")
        setAuthor("")
        setOpenAdd(true);
    };

    const handleSubmitAdd = () => {
        addData()
        handleCloseAdd()
    };
    const handleCloseAdd = () => {
        setOpenAdd(false);
    };





    // CRUD: 



    const editData = () => {
        axios.put(API_URL+`blog/${selected._id}`, {
            title: title,
            description: description,
            author: author,
            technologies: technologies
        }, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then((res) => {
                getBlogs();
            })
    }

    const editAvatar = () => {
        const formData = new FormData();
        formData.append("imen", imen);
        axios.put(API_URL+`blog/image/${selected._id}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
        })
            .then((res) => {
                getBlogs();
            })
    }


    const deleteData = (id) => {

        axios.delete(API_URL+`blog/${id}`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(() => {
                getBlogs();
            })
    }


    const addData = () => {
        const formData = new FormData();
        formData.append("imen", imen);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("author", author);
        formData.append("technologies", technologies);

        axios.post(API_URL+'blog/', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
        }


        )
            .then((res) => {
                if (res.status === 200) {
                    getBlogs()
                }
            })
    }


    return (
        <Box width="100%">
            <Stack sx={{ p: 1 }} direction="row" alignItems="center" justifyContent="space-between" >
                <Typography variant="h4" gutterBottom>
                    Blogs management
                </Typography>
                <Button variant="outlined" color='secondary' onClick={handleClickOpenAdd} startIcon={<PersonAddAltIcon />}>
                    Add
                </Button>
            </Stack>
            <Box >
                <Card sx={{ margin: "5px" }}>
                    <Grid Grid container spacing={2}>
                        <Grid xs={12} sx={{ padding: "20px" }}>

                            <Container>
                                <Box sx={{ m: 1 }}>
                                    <Grid sx={{ textAlign: "left", padding: 1 }}>
                                        <FormControl sx={{ mx: 1, width: '50%' }} variant="outlined">
                                            <OutlinedInput
                                                size='small'
                                                placeholder='Search'
                                                type='text'
                                                onChange={(e) => { setSearch(e.target.value) }}
                                                value={search}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton edge="end">
                                                            <Search />
                                                        </IconButton>
                                                    </InputAdornment>
                                                } />
                                        </FormControl>

                                    </Grid>


                                </Box>

                                <TableContainer>
                                    <Table size='small'>
                                        <TableHead sx={{ background: '#e9ecef' }}>
                                            <TableRow>
                                                {TableHeadTitles.map(e => {
                                                    return (<TableCell key={e.name} align={e.align}>{e.name}</TableCell>)
                                                })}

                                            </TableRow>
                                        </TableHead>

                                        <TableBody>
                                            {!loading && blogs
                                                .filter(e => e.title.toLowerCase().includes(search.toLowerCase()))
                                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                .map((row) => {
                                                    return (
                                                        <TableRow
                                                            hover
                                                            key={row._id}
                                                            tabIndex={-1}

                                                        >

                                                            <TableCell align="left"
                                                                component="th" scope="row" >
                                                                <Stack direction="row" alignItems="center" >
                                                                    {/* <Avatar alt="Remy Sharp" src={"/uploads/" + row.imen} /> */}
                                                                    <Avatar alt="Remy Sharp" src={API_URL+"uploads/" + row.imen} />


                                                                </Stack>
                                                            </TableCell>
                                                            <TableCell align="left"
                                                                component="th" scope="row">
                                                                <Stack direction="row" alignItems="left" spacing={2}>
                                                                    <Typography variant="subtitle4" noWrap>
                                                                        {row.title}
                                                                    </Typography>
                                                                </Stack>
                                                            </TableCell>


                                                            <TableCell align="left"
                                                                component="th" scope="row" >
                                                                <Stack direction="row" alignItems="left" spacing={2}>
                                                                    <Typography variant="subtitle4" noWrap>
                                                                        {row.description}
                                                                    </Typography>
                                                                </Stack>
                                                            </TableCell>
                                                            <TableCell align="left"
                                                                component="th" scope="row" >
                                                                <Stack direction="row" alignItems="center" spacing={2}>
                                                                    <Typography variant="subtitle4" noWrap>
                                                                        {row.author}
                                                                    </Typography>
                                                                </Stack>
                                                            </TableCell>
                                                            <TableCell align="left"
                                                                component="th" scope="row">
                                                                <Stack direction="row" alignItems="left" spacing={2}>
                                                                    <Typography variant="subtitle4" noWrap>
                                                                        {row.technologies}
                                                                    </Typography>
                                                                </Stack>
                                                            </TableCell>




                                                            <TableCell align="center">
                                                                <IconButton color="error" onClick={() => deleteData(row._id)} >
                                                                    <DeleteIcon />
                                                                </IconButton>
                                                                <IconButton
                                                                    color="primary"
                                                                    onClick={() => {
                                                                        setSelected(row)
                                                                        handleClickOpenEdit(row)
                                                                    }}
                                                                >
                                                                    <Edit />
                                                                </IconButton>
                                                                <IconButton
                                                                    color="secondary"
                                                                    onClick={() => {
                                                                        setSelected(row)
                                                                        handleClickOpenEditAvatar(row)
                                                                    }}
                                                                >
                                                                    <DownloadingIcon />
                                                                </IconButton>
                                                            </TableCell>


                                                        </TableRow>
                                                    );
                                                })}
                                            {!loading && emptyRows > 0 && (
                                                <TableRow style={{ height: 53 * emptyRows }}>
                                                    <TableCell colSpan={7} />
                                                </TableRow>
                                            )}
                                            {!loading && connectionErr && (
                                                <TableRow style={{ height: 53 * emptyRows }}>
                                                    <TableCell colSpan={7} >
                                                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>

                                                            <img width={90} alt="NETWORK PROBLEM" src="/static/assets/network-problem.png" />

                                                        </Box>
                                                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                            <Typography variant="h6" color="#383737"> Vérifier votre connexion internet et réessayer.</Typography>
                                                        </Box>

                                                    </TableCell>
                                                </TableRow>
                                            )}
                                            {loading && (
                                                <TableRow style={{ height: 53 * emptyRows }}>
                                                    <TableCell colSpan={7} >
                                                        <Box sx={{ display: 'flex', justifyContent: 'center', pt: 3, pb: 1, px: 1 }}>

                                                            <CircularProgress />

                                                        </Box>
                                                        <Box sx={{ display: 'flex', justifyContent: 'center', pb: 3, px: 1 }}>

                                                            <Typography variant="h6" color="#383737"> Chargement de contenu.</Typography>

                                                        </Box>

                                                    </TableCell>
                                                </TableRow>
                                            )}
                                            {!loading && blogs.length === 0 && !connectionErr && (

                                                <TableRow>
                                                    <TableCell colSpan={7} >
                                                        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2, mt: 2 }}>

                                                            <img width={70} alt="NETWORK PROBLEM" src="/static/assets/no-result.png" />

                                                        </Box>
                                                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>

                                                            <Typography variant="h6" color="#383737"> Aucune résultat.</Typography>

                                                        </Box>

                                                    </TableCell>
                                                </TableRow>

                                            )}
                                        </TableBody>


                                    </Table>
                                </TableContainer>
                                {!loading && !connectionErr && blogs.length > 0 &&
                                    <TablePagination
                                        rowsPerPageOptions={[5, 10, 25]}
                                        component="div"
                                        count={blogs.length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        labelRowsPerPage={"Element in page"}
                                        onPageChange={handleChangePage}
                                        onRowsPerPageChange={handleChangeRowsPerPage}
                                    />}
                            </Container>


                        </Grid>
                    </Grid>
                </Card>
            </Box>

            {/* Dialogs Components */}
            <DeleteRaison />

            {/* edit blog */}
            <Dialog
                open={openEdit}
                onClose={handleCloseEdit}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogContent sx={{ padding: "20px 40px" }}>
                    <Typography sx={{ fontSize: '40px', fontWeight: "bold" }}>
                        Modifier
                    </Typography>
                    <form>

                        <TextField id="outlined-basic" label="title" variant="outlined" value={title}
                            onChange={(e) => { setTitle(e.target.value) }} fullWidth sx={{ margin: "20px 0" }} />

                        <TextField id="outlined-basic" label="description" variant="outlined" value={description}
                            onChange={(e) => { setDescription(e.target.value) }} fullWidth sx={{ margin: "20px 0" }} />

                        <TextField id="outlined-basic" label="author" variant="outlined" value={author}
                            onChange={(e) => { setAuthor(e.target.value) }} fullWidth sx={{ margin: "20px 0" }} />

                        <TextField id="outlined-basic" label="technologies" variant="outlined" value={technologies}
                            onChange={(e) => { setTechnologies(e.target.value) }} fullWidth sx={{ margin: "20px 0" }} />



                        <DialogActions>
                            <Button onClick={handleCloseEdit} autoFocus>Cancel</Button>
                            <Button onClick={handleSubmitEdit}>edit</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
            {/* end edit blog */}
            {/* edit avatar */}
            <Dialog
                open={openEditAvatar}
                onClose={handleCloseEditAvatar}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogContent sx={{ padding: "20px 40px" }}>
                    <Typography sx={{ fontSize: '40px', fontWeight: "bold" }}>
                        Modifier
                    </Typography>
                    <form>

                        <input type="file"
                            onChange={(e) => {
                                setImen(e.target.files[0])
                            }}
                        />


                        <DialogActions>
                            <Button onClick={handleCloseEditAvatar} autoFocus>Cancel</Button>
                            <Button onClick={handleSubmitEditAvatar}>edit</Button>
                        </DialogActions>

                    </form>
                </DialogContent>
            </Dialog>
            {/* end edit avatar */}

            {/* add blog */}
            <Dialog
                open={openAdd}
                onClose={handleCloseAdd}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogContent sx={{ padding: "20px 40px" }}>
                    <Typography sx={{ fontSize: '40px', fontWeight: "bold" }}>
                        Ajouter un Raison
                    </Typography>
                    <form>

                        <input type="file"
                            onChange={(e) => {
                                setImen(e.target.files[0])
                            }} />

                        <TextField id="outlined-basic" label="title" variant="outlined" value={title}
                            onChange={(e) => { setTitle(e.target.value) }} fullWidth sx={{ margin: "20px 0" }} />

                        <TextField id="outlined-basic" label="description" variant="outlined" value={description}
                            onChange={(e) => { setDescription(e.target.value) }} fullWidth sx={{ margin: "20px 0" }} />

                        <TextField id="outlined-basic" label="author" variant="outlined" value={author}
                            onChange={(e) => { setAuthor(e.target.value) }} fullWidth sx={{ margin: "20px 0" }} />

                        <TextField id="outlined-basic" label="technologies" variant="outlined" value={technologies}
                            onChange={(e) => { setTechnologies(e.target.value) }} fullWidth sx={{ margin: "20px 0" }} />



                        <DialogActions>
                            <Button onClick={handleCloseAdd} autoFocus>Cancel</Button>
                            <Button onClick={handleSubmitAdd}>Add</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
            {/*end add blog */}
            {/*End Dialogs Components */}

        </Box>
    );
}