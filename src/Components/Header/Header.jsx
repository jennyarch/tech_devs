import React from "react";
import { createBrowserHistory } from 'history';
import { useParams } from "react-router-dom";
import Facebook from '../../assets/img/facebook.png';
import Linkedin from '../../assets/img/linkedin.png';
import Discord from '../../assets/img/discord.png';
import Logo from '../../assets/img/logo.png';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import {
    Cabecalho,
    Icons,
    ListIcons,
    LogoAndTitle,
    Title,
    LogoMain
} from './styles';


const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      borderRadius: 8,
      width: 250,
      height:35,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }));

function Header(){
    const classes = useStyles();

    let { id } = useParams()

    function Main(id){
        const history = createBrowserHistory();
        history.push(`/main/${id}`);
        history.go();
    }

    return(
        <Cabecalho>
            <Icons>
                <li><a href="https://www.linkedin.com/"><ListIcons src={Linkedin} alt="" /></a></li>
                <li><a href="https://www.facebook.com/"><ListIcons src={Facebook} alt="" /></a></li>
                <li><a href="https://discord.com/"><ListIcons src={Discord} alt="" /></a></li>
            </Icons>
            <LogoAndTitle>
                <LogoMain src={Logo} alt="Logo" onClick={Main}>{/* <a href={Main}></a> */}</LogoMain>
                <Title>Jennyfer C. Santos</Title> 
            </LogoAndTitle>
            <Paper component="form" className={classes.root}>
                
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <InputBase
                    className={classes.input}
                    placeholder="Busca"
                    inputProps={{ 'aria-label': 'Busca' }}
                />
                
            </Paper>


        </Cabecalho>
    )
}
export default Header;