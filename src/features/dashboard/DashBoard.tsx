import {  Grid ,Box, LinearProgress } from "@mui/material"
import { useAppDispatch } from "app/hooks"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import StaticticsItem from "./components/StaticticsItem"
import { dashboardActions ,
  selectDashBoardLoading ,
  selectDashBoardHighestStudentList,
  selectDashBoardLowestStudentList,
  selectDashBoardRankingByCityList,
  selectDashBoardStatistics,
  RankingByCity

} from "./DashBoardSlice"
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import ScoreIcon from '@mui/icons-material/Score';
import Widget from "./components/Widget"
import StudentRankingList from "./components/StudentRankingList"


function DashBoard() {
  const dispatch = useAppDispatch()
  const dashBoardLoading = useSelector(selectDashBoardLoading)
  const dashBoardStatistics = useSelector(selectDashBoardStatistics)
  const dashBoardHighestStudentList = useSelector(selectDashBoardHighestStudentList)
  const dashBoardLowestStudentList = useSelector(selectDashBoardLowestStudentList)
  const dashBoardRankingByCityList : Array<RankingByCity> = useSelector(selectDashBoardRankingByCityList)

  useEffect(()=>{
    dispatch(dashboardActions.fetchData())
  },[dispatch])

  //console.log("dashBoardRankingByCityList",dashBoardRankingByCityList)
  return (
    <div>
      {dashBoardLoading ??  <LinearProgress color="secondary" />}
      {/* statictics section */}
      <Box>
          <Grid container spacing={2}>
            <Grid item xs={3}>
                <StaticticsItem 
                      icon={< MaleIcon color={"primary"} fontSize={"large"} /> }
                      label={'Male'} 
                      value={dashBoardStatistics.maleCount.toString()}
                 />
            </Grid>
            <Grid item xs={3}>
              <StaticticsItem 
                        icon={< FemaleIcon color={"primary"} fontSize={"large"} /> }
                        label={'Female'} 
                        value={dashBoardStatistics.femaleCount.toString()}
                  />
            </Grid>
            <Grid item xs={3}>
              <StaticticsItem 
                          icon={< ScoreIcon color={"primary"} fontSize={"large"} /> }
                          label={'Mark >= 8 '} 
                          value={dashBoardStatistics.highMarkCount.toString()}
                    />
            </Grid>
            <Grid item xs={3}>
              <StaticticsItem 
                            icon={< ScoreIcon color={"primary"} fontSize={"large"} /> }
                            label={'Mark < 5 '} 
                            value={dashBoardStatistics.lowMarkCount.toString()}
                      />
            </Grid>
          </Grid>
      </Box>

      {/* All student ranking  */}
      <Box mt={'10px'}>
        <Grid container spacing={3}>
          <Grid item xs={5}>
              <Widget title={'Highest-Mark Students'}>
                <StudentRankingList studentList={dashBoardHighestStudentList}/>
              </Widget>
          </Grid>
          <Grid item xs={7}>
              <Widget title={'Lowest-Mark Students'}>
                 <StudentRankingList studentList={dashBoardLowestStudentList}/>
              </Widget>
          </Grid>
        </Grid>
      </Box>
     
      <Box mt={'10px'}>
        <Grid container spacing={3}>
           {  dashBoardRankingByCityList.map((ranking : RankingByCity) => {
             return  (
                <Grid item xs={3} key={ranking.cityId}>
                    <Widget title={ranking.cityName}>
                      <StudentRankingList studentList={ranking.rankingList}/>  
                    </Widget>
                </Grid>
             )
            })
          }
        </Grid>
      </Box>


    </div>
  )
}

export default DashBoard