import axios from 'axios';
// react 
import { useEffect, useState } from 'react';

// material 
import {
    Card, Table, Stack, Button, TableRow, TableBody, TableCell, Typography, TableContainer,
    TablePagination, Box, TableHead, CircularProgress, Container, OutlinedInput, InputAdornment, IconButton, FormControl, Grid, DialogActions,
    Dialog, TextField, DialogContent, DialogTitle
} from '@mui/material';

import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { Edit, Search } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';

// components
// Api




export default function ContactAdmin() {
    useEffect(() => {
        getContacts()
    }, [])
    // get all experiments
    const getContacts = () => {
        setLoading(true)
        axios.get('https://my-portfolio-backend-final.vercel.app/contact/')
            .then(res => {
                setContacts(res.data)
                setLoading(false)
                setConnectionErr(false)
            })
            .catch((err) => {
                setLoading(false)
                setConnectionErr(true)
            });
    }
    const [contacts, setContacts] = useState([])



    // data
    const [loading, setLoading] = useState(false)
    const [selected, setSelected] = useState({})


    const [email, setEmail] = useState("")
    const [fullName, setFullName] = useState("")
    const [job, setJob] = useState("")
    const [linkedin, setLinkedin] = useState("")
    const [twitter, setTwitter] = useState("")
    const [github, setGithub] = useState("")





    //table UI
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - contacts.length) : 0;
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
        { align: "left", name: "full name" },
        { align: "left", name: "job" },
        { align: "left", name: "email" },
        { align: "left", name: "linkedin" },
        { align: "left", name: "twitter" },
        { align: "left", name: "github" },
        { align: "center", name: "Actions" },
    ]
    ////////////////////////////////////////////////////////////





    // form of delete
    const [openDelete, setOpenDelete] = useState(false);


    function DeleteContact() {
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

                    <Typography>{selected.title}</Typography>

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

        setEmail(row.email)
        setFullName(row.fullName)
        setJob(row.job)
        setLinkedin(row.linkedin)
        setTwitter(row.twitter)
        setGithub(row.github)
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
    // form of add 
    const [openAdd, setOpenAdd] = useState(false);
    const handleClickOpenAdd = () => {
        setEmail("")
        setFullName("")
        setJob("")
        setLinkedin("")
        setTwitter("")
        setGithub("")

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
        axios.put(`https://my-portfolio-backend-final.vercel.app/contact/${selected._id}`, {
            email: email,
            fullName: fullName,
            job: job,
            linkedin: linkedin,
            twitter: twitter,
            github: github,



        }, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then((res) => {
                getContacts();
            })
    }




    const deleteData = (id) => {

        axios.delete(`https://my-portfolio-backend-final.vercel.app/contact/${id}`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(() => {
                getContacts();
            })
    }


    const addData = () => {

        try {
            axios.post('https://my-portfolio-backend-final.vercel.app/contact/', {
                email: email,
                fullName: fullName,
                job: job,
                linkedin: linkedin,
                twitter: twitter,
                github: github,

            }, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            }


            )
                .then((res) => {
                    if (res.status === 200) {
                        getContacts()
                    }
                })


        } catch (error) {
            console.error(error)
        }


    }


    return (
        <Box width="100%">
            <Stack sx={{ p: 1 }} direction="row" alignItems="center" justifyContent="space-between" >
                <Typography variant="h4" gutterBottom>
                    Contacts management
                </Typography>
                <Button variant="outlined" color='secondary' onClick={handleClickOpenAdd} startIcon={<PersonAddAltIcon />}>
                    add
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
                                            {!loading && contacts
                                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                .map((row) => {
                                                    return (
                                                        <TableRow
                                                            hover
                                                            key={row._id}
                                                            tabIndex={-1}

                                                        >

                                                            <TableCell align="left"
                                                                component="th" scope="row">
                                                                <Stack direction="row" alignItems="left" spacing={2}>
                                                                    <Typography variant="subtitle4" noWrap>
                                                                        {row.fullName}
                                                                    </Typography>
                                                                </Stack>
                                                            </TableCell>

                                                            <TableCell align="left"
                                                                component="th" scope="row" >
                                                                <Stack direction="row" alignItems="left" spacing={2}>
                                                                    <Typography variant="subtitle4" noWrap>
                                                                        {row.job}
                                                                    </Typography>
                                                                </Stack>
                                                            </TableCell>
                                                            <TableCell align="left"
                                                                component="th" scope="row" >
                                                                <Stack direction="row" alignItems="center" spacing={2}>
                                                                    <Typography variant="subtitle4" noWrap>
                                                                        {row.email}
                                                                    </Typography>
                                                                </Stack>
                                                            </TableCell>
                                                            <TableCell align="left"
                                                                component="th" scope="row" >
                                                                <Stack direction="row" alignItems="center" spacing={2}>
                                                                    <Typography variant="subtitle4" noWrap>
                                                                        {row.linkedin}
                                                                    </Typography>
                                                                </Stack>
                                                            </TableCell>
                                                            <TableCell align="left"
                                                                component="th" scope="row" >
                                                                <Stack direction="row" alignItems="center" spacing={2}>
                                                                    <Typography variant="subtitle4" noWrap>
                                                                        {row.twitter}
                                                                    </Typography>
                                                                </Stack>
                                                            </TableCell>
                                                            <TableCell align="left"
                                                                component="th" scope="row" >
                                                                <Stack direction="row" alignItems="center" spacing={2}>
                                                                    <Typography variant="subtitle4" noWrap>
                                                                        {row.github}
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
                                            {!loading && contacts.length === 0 && !connectionErr && (

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
                                {!loading && !connectionErr && contacts.length > 0 &&
                                    <TablePagination
                                        rowsPerPageOptions={[5, 10, 25]}
                                        component="div"
                                        count={contacts.length}
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

            {/* --------------------------------dialog components------------------------------------- */}
            <DeleteContact />

            {/* edit contact */}
            <Dialog
                open={openEdit}
                onClose={handleCloseEdit}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogContent sx={{ padding: "20px 40px" }}>
                    <Typography sx={{ fontSize: '40px', fontWeight: "bold" }}>
                        edit
                    </Typography>
                    <form>

                        <TextField id="outlined-basic" label="email" variant="outlined" value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            fullWidth sx={{ margin: "20px 0" }} />
                        <TextField id="outlined-basic" label="full name" variant="outlined" value={fullName}
                            onChange={(e) => {
                                setFullName(e.target.value)
                            }}
                            fullWidth sx={{ margin: "20px 0" }} />
                        <TextField id="outlined-basic" label="job" variant="outlined" value={job}
                            onChange={(e) => {
                                setJob(e.target.value)
                            }}
                            fullWidth sx={{ margin: "20px 0" }} />
                        <TextField id="outlined-basic" label="linkedin" variant="outlined" value={linkedin}
                            onChange={(e) => {
                                setLinkedin(e.target.value)
                            }}
                            fullWidth sx={{ margin: "20px 0" }} />
                        <TextField id="outlined-basic" label="twitter" variant="outlined" value={twitter}
                            onChange={(e) => {
                                setTwitter(e.target.value)
                            }}
                            fullWidth sx={{ margin: "20px 0" }} />

                        <TextField id="outlined-basic" label="github" variant="outlined" value={github}
                            onChange={(e) => {
                                setGithub(e.target.value)
                            }}
                            fullWidth sx={{ margin: "20px 0" }} />



                        <DialogActions>
                            <Button onClick={handleCloseEdit} autoFocus>Cancel</Button>
                            <Button onClick={handleSubmitEdit}>edit</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
            {/* end edit contact */}


            {/* add contact */}
            <Dialog
                open={openAdd}
                onClose={handleCloseAdd}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogContent sx={{ padding: "20px 40px" }}>
                    <Typography sx={{ fontSize: '40px', fontWeight: "bold" }}>
                        Add contact
                    </Typography>
                    <form>
                    <TextField id="outlined-basic" label="email" variant="outlined" value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            fullWidth sx={{ margin: "20px 0" }} />
                        <TextField id="outlined-basic" label="full name" variant="outlined" value={fullName}
                            onChange={(e) => {
                                setFullName(e.target.value)
                            }}
                            fullWidth sx={{ margin: "20px 0" }} />
                        <TextField id="outlined-basic" label="job" variant="outlined" value={job}
                            onChange={(e) => {
                                setJob(e.target.value)
                            }}
                            fullWidth sx={{ margin: "20px 0" }} />
                        <TextField id="outlined-basic" label="linkedin" variant="outlined" value={linkedin}
                            onChange={(e) => {
                                setLinkedin(e.target.value)
                            }}
                            fullWidth sx={{ margin: "20px 0" }} />
                        <TextField id="outlined-basic" label="twitter" variant="outlined" value={twitter}
                            onChange={(e) => {
                                setTwitter(e.target.value)
                            }}
                            fullWidth sx={{ margin: "20px 0" }} />

                        <TextField id="outlined-basic" label="github" variant="outlined" value={github}
                            onChange={(e) => {
                                setGithub(e.target.value)
                            }}
                            fullWidth sx={{ margin: "20px 0" }} />




                        <DialogActions>
                            <Button onClick={handleCloseAdd} autoFocus>Cancel</Button>
                            <Button onClick={handleSubmitAdd}>Ajouter</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
            {/*end add contact */}

        </Box>
    );
}