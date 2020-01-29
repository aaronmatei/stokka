import React, { useEffect, useState, useContext } from 'react';
import UserContext from '../../../../context/users/userContext';
import {
  GridList,
  GridListTile,
  GridListTileBar,
  Icon,
  IconButton,
  Typography,
  ListSubheader
} from '@material-ui/core';

function PhotosVideosTab() {
  const [data, setData] = useState(null);
  const photosContext = useContext(UserContext);

  const { photosVideos } = photosContext;

  useEffect(() => {
    setData(photosVideos);
  }, []);

  if (!data) {
    return null;
  }

  return (
    <div className='md:flex w-full'>
      <div className='flex flex-col flex-1 md:pr-32'>
        {data.map(period => (
          <div key={period.id} className='mb-48'>
            <ListSubheader
              component='div'
              className='flex items-center pl-0 mb-24'
            >
              <Typography className='mr-16' variant='h6'>
                {period.name}
              </Typography>
              <Typography variant='subtitle1' color='textSecondary'>
                {period.info}
              </Typography>
            </ListSubheader>

            <GridList className='' spacing={8} cols={0}>
              {period.media.map(media => (
                <GridListTile
                  classes={{
                    root: 'w-full sm:w-1/2 md:w-1/4',
                    tile: 'rounded-8'
                  }}
                  key={media.preview}
                >
                  <img src={media.preview} alt={media.title} />
                  <GridListTileBar
                    title={media.title}
                    actionIcon={
                      <IconButton>
                        <Icon className='text-white opacity-75'>info</Icon>
                      </IconButton>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotosVideosTab;
