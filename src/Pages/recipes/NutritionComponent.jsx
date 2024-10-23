import { Divider, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { urlRecipes } from '../../endpoints';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import PageSkeleton from '../../Components/PageSkeleton';

const NutritionComponent = () => {
       const { id } = useParams();
       const data = useFetch(`${urlRecipes}/${id}`);

       const [cooktime, setCooktime] = useState(0);
       const [kcal, setKcal] = useState(0);
       const [name, setName] = useState('');
       const [porsionsize, setPorsionsize] = useState(0);
       const [preparationTime, setPreparationTime] = useState(0);
       const [totalPorsiongram, setTotalPorsiongram] = useState(0);
     
       useEffect(() => {
         if (data) {
           setCooktime(data?.data?.cooktime);
           setKcal(data?.data?.kcal);
           setName(data?.data?.name);
           setPorsionsize(data?.data?.porsionsize);
           setPreparationTime(data?.data?.preparationTime);
           setTotalPorsiongram(data?.data?.totalPorsiongram);
         }
       }, [data]);
       const { loading, error } = useFetch(urlRecipes);
       if (loading) return <PageSkeleton/>;
       if (error){
          <PageSkeleton/>
           window.location.reload()
     
       }
       const setdata = data.data;

  return (
    <div>
        <Typography
                  mx={3}
                  mt={5}
                  mb={2}
                  textAlign="start"
                  alignSelf="center"
                  variant="h5"
                >
                  Besin Değerleri
                </Typography>

                <Divider variant="fullWidth" component="" />
                <Typography
                  sx={{
                    mt: 2,
                    mx: 3,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  textAlign="start"
                  variant="h5"
                >
                  Kalori
                  <Typography textAlign="end" variant="h6">
                    {" "}
                    {kcal} kcal
                  </Typography>
                </Typography>
                <Divider variant="middle" component="" />

                <Typography
                  sx={{
                    mx: 3,
                    mt: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  textAlign="start"
                  variant="h5"
                >
                  Karbonhidrat
                  <Typography textAlign="end" variant="h6">
                    {" "}
                    {kcal} kcal
                  </Typography>
                </Typography>

                <Divider variant="middle" component="" />
                <Typography
                  sx={{
                    mt: 2,
                    mx: 3,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  textAlign="start"
                  variant="h5"
                >
                  Yağ
                  <Typography textAlign="end" variant="h6">
                    {" "}
                    {kcal} kcal
                  </Typography>
                </Typography>
                <Divider variant="middle" component="" />

                <Divider variant="middle" component="" />
                <Typography
                  sx={{
                    mx: 3,
                    mt: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  textAlign="start"
                  variant="h5"
                >
                  Protein
                  <Typography textAlign="end" variant="h6">
                    {" "}
                    {kcal} kcal
                  </Typography>
                </Typography>
                <Divider variant="middle" component="" />

                <Divider variant="middle" component="" />
                <Typography
                  sx={{
                    mx: 3,
                    mt: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  textAlign="start"
                  variant="h5"
                >
                  Lif
                  <Typography textAlign="end" variant="h6">
                    {" "}
                    {kcal} kcal
                  </Typography>
                </Typography>
                <Divider variant="middle" component="" />

                <Divider variant="middle" component="" />
                <Typography
                  sx={{
                    mx: 3,
                    mt: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  textAlign="start"
                  variant="h5"
                >
                  Sodyum
                  <Typography textAlign="end" variant="h6">
                    {" "}
                    {kcal} kcal
                  </Typography>
                </Typography>
                <Divider variant="middle" component="" />

                <Divider variant="middle" component="" />
                <Typography
                  sx={{
                    mx: 3,
                    mt: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  textAlign="start"
                  variant="h5"
                >
                  Kolestrol
                  <Typography textAlign="end" variant="h6">
                    {" "}
                    {kcal} kcal
                  </Typography>
                </Typography>
                <Divider variant="middle" component="" />

                <Divider variant="middle" component="" />
                <Typography
                  sx={{
                    mx: 3,
                    mt: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  textAlign="start"
                  variant="h5"
                >
                  Kalori
                  <Typography textAlign="end" variant="h6">
                    {" "}
                    {kcal} kcal
                  </Typography>
                </Typography>
                <Divider variant="middle" component="" />

                <Divider variant="middle" component="" />
                <Typography
                  sx={{
                    mx: 3,
                    mt: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  textAlign="start"
                  variant="h5"
                >
                  Kalori
                  <Typography textAlign="end" variant="h6">
                    {" "}
                    {kcal} kcal
                  </Typography>
                </Typography>
                <Divider variant="middle" component="" />

                <Divider variant="middle" component="" />
                <Typography
                  sx={{
                    mx: 3,
                    mt: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  textAlign="start"
                  variant="h5"
                >
                  Kalori
                  <Typography textAlign="end" variant="h6">
                    {" "}
                    {kcal} kcal
                  </Typography>
                </Typography>
                <Divider
                  sx={{
                    mb: 0,
                  }}
                  variant="middle"
                  component=""
                />
    </div>
  )
}

export default NutritionComponent
