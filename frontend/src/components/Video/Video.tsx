import React from 'react';
import ReactPlayer from 'react-player/youtube';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const videoStyles = makeStyles((theme) =>
  createStyles({
    video: {
      marginBottom: '20px',
      [theme.breakpoints.down('sm')]: {
        width: '310px !important',
      },
    },
  }),
);

const Video = ({ src }: { src: any }) => {
  const classes = videoStyles();
  return <ReactPlayer url={src} controls className={classes.video} />;
};

export default Video;
