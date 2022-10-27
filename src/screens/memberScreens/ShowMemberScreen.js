import React, { useContext } from "react";
import {
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from "react-native";
import MemberContext from "../../context/MemberContext";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MemberFields from "../../components/memberComponents/MemberFields";
import { formatDate } from "../../utils/date";
import moment from "moment";

const ShowMemberScreen = ({ navigation }) => {
  const { data } = useContext(MemberContext);

  const member = data.find((member) => member.id === navigation.getParam("id"));
  return (
    <ScrollView testID="showMemberBackground">
      <SafeAreaView>
        <MemberFields fieldTestId="id" labelText="ID" fieldValue={member.id} />
        <MemberFields
          fieldTestId="name"
          labelText="Name"
          fieldValue={member.name}
        />
        <MemberFields
          fieldTestId="surname"
          labelText="Surname"
          fieldValue={member.surname}
        />
        <MemberFields
          fieldTestId="dateOfBirth"
          labelText="Date of Birth"
          fieldValue={formatDate(member.dateOfBirth)}
        />
        <MemberFields
          fieldTestId="startDay"
          labelText="Start Day"
          fieldValue={member.startDay}
        />
        <MemberFields
          fieldTestId="email"
          labelText="Email"
          fieldValue={member.email}
        />
        <MemberFields
          fieldTestId="addressLineOne"
          labelText="Address Line One"
          fieldValue={member.addressLineOne}
        />
        <MemberFields
          fieldTestId="addressLineTwo"
          labelText="Address Line Two"
          fieldValue={member.addressLineTwo}
        />
        <MemberFields
          fieldTestId="city"
          labelText="City"
          fieldValue={member.city}
        />
        <MemberFields
          fieldTestId="postcode"
          labelText="Postcode"
          fieldValue={member.postcode}
        />
        <MemberFields
          fieldTestId="country"
          labelText="Country"
          fieldValue={member.country}
        />
        <MemberFields
          fieldTestId="startDate"
          labelText="Start Date"
          fieldValue={moment(member.startDate.dateString).format("DD-MM-YYYY")}
        />
        <MemberFields
          fieldTestId="startTime"
          labelText="Start Time"
          fieldValue={
            member.startTime ? moment(member.startTime).format("HH:mm") : ""
          }
        />
      </SafeAreaView>
    </ScrollView>
  );
};

ShowMemberScreen.navigationOptions = ({ navigation }) => {
  const id = navigation.getParam("id");

  return {
    headerTitle: () => <Text testID="showMemberHeader">Member ${id}</Text>,
    headerTitleAlign: "center",
    headerRight: () => (
      <TouchableOpacity
        onPress={() => navigation.navigate("EditMember", { id })}
      >
        <FontAwesome
          style={styles.editIcon}
          testID="editMemberIcon"
          name="pencil"
          size={25}
        />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  editIcon: {
    paddingRight: 5,
  },
});

export default ShowMemberScreen;
