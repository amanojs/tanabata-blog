import * as React from 'react'
import {
  Box,
  LinearProgress,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core'
import { CallToAction, ViewList } from '@material-ui/icons'
import { BlogList } from '../../components/BlogList'
import { Blog } from '../../models/Blog'
import { ProfileBox } from '../../components/ProfileBox'
import history from '../../modules/history'

interface OwnProps {
  isLoading: boolean
  genres: string[]
  blogs: Blog[]
  dispType: number
  setDispType(i: number): void
  nowGenre: string
}

const TopDesk: React.FC<OwnProps> = (props) => {
  return (
    <React.Fragment>
      <Box
        width="100%"
        className="TopContainer"
        boxSizing="border-box"
        padding="0 20px"
        margin="0px auto"
      >
        {/* <Box
          width="100%"
          display="flex"
          flexWrap="wrap"
          padding="20px 100px 30px 100px"
          boxSizing="border-box"
          style={{
            backgroundImage:
              'url(https://icotto.k-img.com/system/press_eye_catches/000/010/037/021327b3d8ad3846826d14abf41a81e29fa75aea.jpeg?1491556993)',
            backgroundSize: 'cover',
            backgroundPosition: 'bottom'
          }}
          borderRadius="2px"
        >
          {props.genres.map((item: string, index: number) => (
            <Button
              key={index}
              style={{
                width: '32%',
                height: '40px',
                marginTop: '10px',
                backgroundColor: '#fff',
                marginRight: (index + 1) % 3 == 0 ? '0px' : '2%'
              }}
              onClick={() => history.push(`/?genre=${item}`)}
            >
              {item}
            </Button>
          ))}
        </Box> */}

        <Box display="flex">
          <Box
            className="categorybox"
            width="40%"
            display="flex"
            alignItems="center"
            boxSizing="border-box"
            border="1px solid #3F51B5"
            padding="15px 0 15px 10px"
            margin="5px 0 15px 0"
            fontSize="17px"
            fontWeight="bold"
            style={{ borderWidth: '0 0 1px 15px' }}
          >
            {new URLSearchParams(window.location.search).get('genre') ||
              '最新の記事'}
          </Box>
          <Box
            className="disptype-contoroller"
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            width="27.8%"
          >
            <FormControl variant="outlined" style={{ minWidth: '200px' }}>
              <InputLabel id="demo-simple-select-outlined-label">
                カテゴリ
              </InputLabel>
              <Select
                value={props.nowGenre}
                onChange={(e) => {
                  e.target.value
                    ? history.push(`/?genre=${e.target.value}`)
                    : history.push(`/`)
                }}
                label="カテゴリ"
              >
                <MenuItem value={null}>
                  <em>最新</em>
                </MenuItem>
                {props.genres.map((genre: string) => (
                  <MenuItem value={genre}>{genre}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <IconButton
              edge="start"
              aria-label="menu"
              style={{ display: 'block', marginLeft: 0 }}
              onClick={() => {
                props.setDispType(0)
              }}
            >
              <CallToAction
                fontSize="small"
                style={{
                  color: props.dispType === 0 ? '#61C1BE' : '#999'
                }}
              />
            </IconButton>
            <IconButton
              edge="start"
              aria-label="menu"
              style={{ display: 'block', marginLeft: 0 }}
              onClick={() => {
                props.setDispType(1)
              }}
            >
              <ViewList
                style={{
                  color: props.dispType === 1 ? '#61C1BE' : '#999'
                }}
              />
            </IconButton>
          </Box>
        </Box>
        <Box display="flex" minHeight="550px">
          {props.isLoading ? (
            <LinearProgress
              style={{ width: '70%', margin: '-10px 25px 0 0' }}
            />
          ) : (
            <BlogList
              blogs={props.blogs}
              dispType={props.dispType}
              width="70%"
              margin="-10px 25px 0 0"
            />
          )}
          <ProfileBox
            width="31%"
            height="425px"
            marginBottom="10px"
            bgcolor="#fff"
            position="sticky"
            top="10px"
          />
        </Box>
      </Box>

      <style jsx>{`
        @media screen and (min-width: 1501px) {
          .TopContainer {
            max-width: 1500px;
          }
        }
        @media screen and (max-width: 1500px) {
          .TopContainer {
            max-width: 1200px;
          }
        }
      `}</style>
    </React.Fragment>
  )
}

export default TopDesk
