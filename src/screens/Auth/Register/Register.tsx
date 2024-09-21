import React, { useCallback, useState } from "react";
import { View, ScrollView, Alert } from "react-native";
import { formValidator } from "../../../helpers/formValidator";
import {
  TouchableOpacity,
  TextInput,
  PassInput,
  RadioButton,
  NormalPicker,
  DocumentPicker,
} from "../../../components/index";
import { styles } from "./Styles";
import { useFocusEffect } from "@react-navigation/native";
import { brands, categories } from "../../../mockData";
import { documentBlobConverter } from "../../../helpers/blobConverter";

const Register = ({ navigation }) => {
  const [userCred, setUserCred] = useState({
    email: "",
    password: "",
    confirm: "",
    category: 1,
    brand: 1,
    company_registration: {},
    id: {},
  });
  const [userType, setUserType] = useState(1);
  const [categoriesAll, setCategoriesAll] = useState<
    {
      id: number;
      name: string;
    }[]
  >([]);
  const [brandsAll, setBrandsAll] = useState<
    {
      id: number;
      name: string;
      cat_id: number;
    }[]
  >([]);

  useFocusEffect(
    useCallback(() => {
      setCategoriesAll(categories);
      setBrandsAll(brands);
      // setData(products)
    }, [])
  );

  const settingCreds = (e, t) => {
    setUserCred({ ...userCred, [t]: e });
  };

  const login = () => {
    let payload;
    let choice;

    if (userType == 1) {
      payload = {
        email: userCred.email,
        password: userCred.password,
        confirm: userCred.confirm,
        id: userCred.id,
      };
      choice = "buyerRegister";
    } else {
      payload = userCred;
      choice = "sellerRegister";
    }

    formValidator(payload, choice, () =>
      Alert.alert("SignUp", "User registered successfully", [
        { text: "Ok", onPress: () => navigation.navigate("login") },
      ])
    );
  };

  return (
    <View style={styles.login_container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <RadioButton
            containerStyle={styles.radiobutton_container}
            value={userType}
            items={[
              { text: "Buyer", value: 1 },
              { text: "Seller", value: 2 },
            ]}
            onValueChange={(e) => setUserType(e)}
          />
          <TextInput
            label="Email"
            onChangeText={(e) => settingCreds(e, "email")}
            value={userCred.email}
          />
          <PassInput
            label="Password"
            onChangeText={(e) => settingCreds(e, "password")}
            value={userCred.password}
          />
          <PassInput
            label="Confirm Password"
            onChangeText={(e) => settingCreds(e, "confirm")}
            value={userCred.confirm}
          />

          {userType == 2 && (
            <>
              <NormalPicker
                items={categoriesAll}
                label="Category"
                setValue={(e) => {
                  setUserCred({ ...userCred, category: e });
                }}
                value={userCred.category}
              />
              <NormalPicker
                items={brandsAll.filter(
                  (item) => item.cat_id == userCred.category
                )}
                label="Brand"
                setValue={(e) => {
                  setUserCred({ ...userCred, brand: e });
                }}
                value={userCred.brand}
              />
              <DocumentPicker
                text="Company Registration"
                value={userCred.company_registration}
                setDocument={async (e) => {
                  let result = await documentBlobConverter(e);
                  setUserCred({
                    ...userCred,
                    company_registration: {
                      doc_title: result.name,
                      doc_url: result.file,
                      doc_extension: result.extension,
                    },
                  });
                }}
                setError={() => {
                  setUserCred({ ...userCred, company_registration: {} });
                }}
                types={["pdf"]}
              />
            </>
          )}

          <DocumentPicker
            text="Id pdf"
            value={userCred.id}
            setDocument={async (e) => {
              let result = await documentBlobConverter(e);
              setUserCred({
                ...userCred,
                id: {
                  doc_title: result.name,
                  doc_url: result.file,
                  doc_extension: result.extension,
                },
              });
            }}
            setError={() => {
              setUserCred({ ...userCred, id: {} });
            }}
            types={["pdf"]}
          />
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              text="Register"
              onPress={() => login()}
              settings={["primary", "outlined"]}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;
