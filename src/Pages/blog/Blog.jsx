import {
  Box,
  Button,
  ButtonBase,
  ButtonGroup,
  Container,
  InputBase,
  useTheme,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import BlogCard from "../../Components/blog/BlogCard";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { ColorModeContext, tokens } from "../../theme";

import blogimg from "../../Components/images/products/SALMON_large.png";
import Header from "../../Components/Header";
import {
  urlBlogCategories,
  urlBlogconnectionBlogCategories,
  urlBlogs,
} from "../../endpoints";
import useFetch from "../../hooks/useFetch";
import BlogCategory from "../../Components/blog/BlogCategory";

const Blog = () => {
  const { data, loading, error } = useFetch(urlBlogs);

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [allBlogs, setAllBlogs] = useState([]);

  const [filteredBlogs, setFilteredBlogs] = useState([]);

  const [lastPublishedBlog, SetLastPublish] = useState(null);
  const [datee, SetDate] = useState(null);
  useEffect(() => {
    if (data && data.length > 0) {
      setAllBlogs(data);
      setFilteredBlogs(data);
      const currentDate = new Date();
      const nearestDate = data.reduce((prev, current) => {
        const prevDate = new Date(prev.date);
        const currDate = new Date(current.date);

        return Math.abs(currDate - currentDate) <
          Math.abs(prevDate - currentDate)
          ? current
          : prev;
      });
      SetLastPublish(nearestDate);
      SetDate(new Date(nearestDate.date));
    }
  }, [data]);
  let filteredDate = "";

  if (datee) {
    // `null` check
    const day = datee.getDate();
    const month = datee.getMonth() + 1;
    const year = datee.getFullYear();
    filteredDate = `${day}.${month}.${year}`;
  }
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  useEffect(() => {
    const applyFilters = async () => {
      let filteredData = allBlogs;

      if (selectedCategory !== "all") {
        // Eğer bir kategori seçiliyse, API'den ilgili blogları getir
        try {
          const response = await fetch(
            `${urlBlogconnectionBlogCategories}/${selectedCategory}`
          );
          if (response.ok) {
            filteredData = await response.json();
          } else {
            console.error("Veri alınırken hata oluştu.");
          }
        } catch (error) {
          console.error("Kategoriye göre blogları alırken hata oluştu:", error);
        }
      }

      // Arama işlemi
      if (search.trim() !== "") {
        filteredData = filteredData.filter((blog) =>
          blog.name.toLowerCase().includes(search.toLowerCase())
        );
      }

      setFilteredBlogs(filteredData);
    };

    applyFilters();
  }, [selectedCategory, search, allBlogs]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId === "all" ? null : categoryId); // "Hepsi" seçildiğinde kategori sıfırlanır
    setSearch(""); // Yeni kategori seçildiğinde arama sıfırlanır
  };
  return (
    <Box
      sx={{
        backgroundColor: colors.backGround[400],
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <br />
      </Box>

      <Container maxWidth="xl">
        <Header
          title="Blog"
          subtitle="Sağlıklı Yaşam hakkındaki tüm yazıları buradan takip edebilirsiniz"
        />
        {/* Last submitted Card */}
        <Box
          justifySelf="center"
          maxWidth="100%"
          sx={{
            mb: 15,
            "@media (max-width:1024px)": {
              maxWidth: "100%",
            },
          }}
        >
          {lastPublishedBlog && (
            <Card
              sx={{
                backgroundColor: colors.backGround[300],

                mb: 10,
                mt: 2,
                "@media (min-width:768px)": {
                  display: "flex",
                },
              }}
            >
              <Box
                sx={{
                  "@media (max-width:767px)": {
                    maxWidth: "100%",
                  },
                  minWidth: "50%",
                  maxWidth: "50%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography fontWeight={700} mb={2} variant="h3">
                    {lastPublishedBlog.name}
                  </Typography>
                  <Typography variant="body1">{filteredDate}</Typography>
                  <Typography
                    letterSpacing={1}
                    variant="h50"
                    sx={{ opacity: 0.9, color: "dark" }}
                  >
                    {lastPublishedBlog.description}
                  </Typography>
                </CardContent>
                <Box
                  sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                >
                  <Button
                    style={{
                      color: colors.primary[100],
                    }}
                    className="  Readmore mt-0  mx-2"
                  >
                    {" "}
                    Read More
                  </Button>
                </Box>
              </Box>
              <Box
                sx={{
                  alignContent: "center",
                  justifyItems: "center",
                  maxWidth: "100%",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    p: 1,
                    maxWidth: "100%",
                    height: "100%",
                    "@media (min-width:1024px)": {
                      maxWidth: "75%",
                    },
                    "@media (max-width:767px)": {
                      height: "75%",
                      width: "75%",
                    },
                    "@media (max-width:820px)": {
                      maxHeight: "80%",
                    },
                    "@media (max-width:445px)": {
                      height: "100%",
                      width: "100%",
                    },
                  }}
                  image={`http://localhost:5149${lastPublishedBlog.img}` || ""}
                  alt="L"
                />
              </Box>
            </Card>
          )}
        </Box>
        <BlogCategory
          search={search}
          setSearch={setSearch}
          selectedCategory={selectedCategory}
          setSelectedCategory={handleCategoryChange}
        />

        <Box
          sx={{
            backgroundColor: colors.backGround[400],
            gap: 2,
            padding: 2,
            "@media (max-width: 425px)": {
              gridAutoRows:"minmax(110px, auto)"

                  },
          }}
          display="grid"
          gridTemplateColumns="repeat(12,minmax(0,1fr))"
          gridAutoRows="minmax(150px, auto)"
          nogutters
        >
          {filteredBlogs &&
            filteredBlogs.map((item) => (
              <Box
                key={item.id}
                mx={1}
                gridColumn="span 4"
                gridRow="span 3"
                sx={{
                  "@media (max-width:1024px)": {
                    gridColumn: "span 6",
                    gridRow: "span 3",
                  },
                  "@media (max-width: 425px)": {
                    gridColumn: "span 12",
                    gridRow: "span 3",
                  },
                }}
              >
                <BlogCard blogs={item} />
              </Box>
            ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Blog;
