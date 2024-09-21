import React, { memo, useState, useRef, useCallback } from "react";
import { View, TouchableOpacity, FlatList, Image } from "react-native";
import { brands, categories, products } from "../../../mockData";
import Header from "./components/Header";
import { styles } from "./Styles";
import ActionSheet from "react-native-actions-sheet";
import { HeaderText, Text } from "../../../components";
import { Normal } from "../../../components/Pickers";
import { useFocusEffect } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const Products = (props) => {
  const filterRef = useRef<any>(null);
  const sortRef = useRef<any>(null);

  const [categoriesAll, setCategoriesAll] = useState<
    { id: number; name: string }[]
  >([]);
  const [brandsAll, setBrandsAll] = useState<
    { id: number; name: string; cat_id: number }[]
  >([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<number | null>(null); // Typed to accept numbers or null
  const [brand, setBrand] = useState<number | null>(null); // Typed to accept numbers or null
  const [filteredProducts, setFilteredProducts] = useState<
    {
      id: number;
      name: string;
      price: number;
      image: any;
      cat_id: number;
      subcat_id: number;
    }[]
  >([]);
  const [allProducts, setAllProducts] = useState<
    {
      id: number;
      name: string;
      price: number;
      image: any;
      cat_id: number;
      subcat_id: number;
    }[]
  >([]);
  const [sortedBy, setSortedBy] = useState("");

  useFocusEffect(
    useCallback(() => {
      setCategoriesAll(categories);
      setBrandsAll(brands);
      setAllProducts(products);
      setFilteredProducts(products);
    }, [])
  );

  const show = (type: string) => {
    if (type === "filter" && filterRef.current) {
      filterRef.current.show();
    } else if (type === "sort" && sortRef.current) {
      sortRef.current.show();
    }
  };

  const sortData = (type: string) => {
    let sortedProducts = [...filteredProducts];
    switch (type) {
      case "A-Z":
        sortedProducts.sort((a, b) => (a.name > b.name ? 1 : -1));
        break;
      case "Z-A":
        sortedProducts.sort((a, b) => (a.name < b.name ? 1 : -1));
        break;
      case "high":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "low":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
    }
    setFilteredProducts(sortedProducts);
    setSortedBy(type);
  };

  const filterData = (type: string, value: number) => {
    if (type === "Category") {
      setFilteredProducts(allProducts.filter((item) => item.cat_id === value));
      setCategory(value);
      setBrandsAll(brands.filter((item) => item.cat_id === value));
    } else {
      setFilteredProducts(
        allProducts.filter((item) => item.subcat_id === value)
      );
      setBrand(value);
    }
  };

  const resetFilter = () => {
    setFilteredProducts(products);
    setCategory(null);
    setBrand(null);
  };

  const _renderItem = ({ item }: { item: any }) => {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          props.navigation.navigate("productDetails", { product: item })
        }
      >
        <Image
          source={item.image}
          style={styles.image}
          resizeMode="contain"
          resizeMethod="scale"
        />
        <HeaderText style={styles.name}>{item.name}</HeaderText>
        <Text>${item.price}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.main}>
      <Header search={search} onChangeText={(e) => setSearch(e)} show={show} />

      <View style={styles.flatlist_container}>
        <FlatList
          style={styles.flatlist}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()} // Convert id to string
          data={filteredProducts?.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
          )}
          renderItem={_renderItem}
        />
      </View>
      <ActionSheet ref={filterRef}>
        <View style={styles.filter_by}>
          <HeaderText style={styles.filter_by_header}>Filter By</HeaderText>
          <TouchableOpacity onPress={resetFilter}>
            <HeaderText
              style={[styles.filter_by_header, styles.filter_by_value]}
            >
              Reset
            </HeaderText>
          </TouchableOpacity>
        </View>
        <View style={styles.picker_container}>
          <Normal
            items={categoriesAll}
            label="Category"
            setValue={(e) => filterData("Category", e)}
            value={category}
          />
          <Normal
            items={brandsAll.filter((item) => item.cat_id === category)}
            label="Brand"
            setValue={(e) => filterData("Brand", e)}
            value={brand}
          />
        </View>
      </ActionSheet>
      <ActionSheet ref={sortRef}>
        <View style={styles.filter_by}>
          <HeaderText style={styles.filter_by_header}>Sort By</HeaderText>
          <HeaderText style={[styles.filter_by_header, styles.filter_by_value]}>
            {sortedBy}
          </HeaderText>
        </View>
        <View style={styles.sort_container}>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => sortData("high")}
          >
            <Text style={styles.icon_text}>$$</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon} onPress={() => sortData("low")}>
            <Text style={styles.icon_text}>$</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon} onPress={() => sortData("Z-A")}>
            <AntDesign name="caretup" size={24} color="#FF6863" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon} onPress={() => sortData("A-Z")}>
            <AntDesign name="caretdown" size={24} color="#FF6863" />
          </TouchableOpacity>
        </View>
      </ActionSheet>
    </View>
  );
};

export default memo(Products);
