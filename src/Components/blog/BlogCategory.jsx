import React, { useState } from "react";
import { urlBlogCategories } from "../../endpoints";
import useFetch from "../../hooks/useFetch";
import { Box, Button, InputBase, Typography } from "@mui/material";

const BlogCategory = ({
  search,
  setSearch,
  selectedCategory,
  setSelectedCategory,
}) => {
  const { data, categoryLoading, categoryError } = useFetch(urlBlogCategories);
  console.log(data);
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleCategory = (categoryId) => {
    setSelectedCategory(categoryId);
  };
  return (
    <Box>
      <Box
        sx={{
          gridTemplateColumns: "repeat(12,minmax(0,1fr))",
          gridAutoRows: "40px",
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#013220",
          paddingBottom: 1,
          paddingTop: 1,
          width: "100%",
          height: "100%",
          mb: 7,
          "@media (max-width: 440px)": {
            display: "inline-flex",
            flexDirection: "column",
          },
        }}
      >
        <InputBase
          value={search}
          onChange={handleSearchChange}
          placeholder="Yazı Ara..."
          sx={{
            "@media (max-width: 1024px)": {
              width: "82%",
            },
            // opacity: 0.8,
            ".MuiInputBase-input": {
              marginLeft: 2,
            },
            "&:placeholder": {
              mx: 5,
              color: "black",
            },
            fontSize: 20,
            justifySelf: "center",
            width: "50%",
            gridColumn: "span 12",
            gridRow: "span 3",
            color: "black",
            backgroundColor: "#E1D9D1",
          }}
        />
        <Button
          onClick={() => handleCategory("all")}
          sx={{
            gridColumn: "span 2",
            gridRow: "span 2",
            "@media ()": {},
            mx: 2,
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#E1D9D1",
              color: "black",
            },
          }}
        >
          <Typography
            sx={{
              "&:hover": {
                color: "black",
              },
            }}
            color="white"
            variant="h4"
          >
            Hepsi
          </Typography>
        </Button>
        {data &&
          data.length > 0 &&
          data.map((catItem) => (
            <Button
              key={catItem.id}
              onClick={() => handleCategory(catItem.id)}
              sx={{
                gridColumn: "span 2",
                gridRow: "span 2",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#E1D9D1",
                },
              }}
            >
              <Typography
                key={catItem.id}
                sx={{
                  "&:hover": {
                    color: "black",
                  },
                }}
                color="white"
                variant="h5"
              >
                {catItem.name
                  .split(" ")
                  .map(
                    (word) =>
                      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                  )
                  .join(" ")}
              </Typography>
            </Button>
          ))}
      </Box>
    </Box>
  );
};

export default BlogCategory;
