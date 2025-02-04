import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import * as DocumentPicker from 'react-native-document-picker';

interface FormData {
  fullName: string;
  dateOfBirth: Date;
  gender: 'male' | 'female' | 'other';
  bloodGroup: string;
  height: string;
  weight: string;
  wakeUpTime: Date;
  locationStatus: 'atHome' | 'travelling';
  expectedReturnDate: Date;
  phoneNumber: string;
  alternatePhone: string;
  emailAddress: string;
  NofKname: string;
  NofKnumber: string;
  RwSenior: string;
  Neiname: string;
  Neinumber: string;
  ExistingHealthConditions: string;
  KnownAllergies: string;
  PastSurgeries: string;
  PrefDoctorsName: string;
  PrefDoctorsNumber: string;
  PrefHospital: string;
  ActivityLevel: string;
  DietPref: string;
  SpecialNeeds: string[];
}

const SpecialNeedsOptions = ["Requires Mobility Assistance", "Has Vision Impairment", "Has Hearing Impairment"];

interface DocumentFile {
  name: string;
  type: string;
  uri: string;
  size?: number;
}

const ProfileForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    dateOfBirth: new Date(),
    gender: 'male',
    bloodGroup: '',
    height: '',
    weight: '',
    wakeUpTime: new Date(),
    locationStatus: 'atHome',
    expectedReturnDate: new Date(),
    phoneNumber: '',
    alternatePhone: '',
    emailAddress: '',
    NofKname: '',
    NofKnumber: '',
    RwSenior: '',
    Neiname: '',
    Neinumber: '',
    ExistingHealthConditions: '',
    KnownAllergies: '',
    PastSurgeries: '',
    PrefDoctorsName: '',
    PrefDoctorsNumber: '',
    PrefHospital: '',
    ActivityLevel: '',
    DietPref: '',
    SpecialNeeds: [],
  });

  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [showTimePicker, setShowTimePicker] = useState<boolean>(false);
  const [showReturnDatePicker, setShowReturnDatePicker] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<DocumentFile | null>(null);

  const onDateChange = (event: any, selectedDate?: Date): void => {
    setShowDatePicker(false);
    if (selectedDate) {
      setFormData({ ...formData, dateOfBirth: selectedDate });
    }
  };

  const onTimeChange = (event: any, selectedTime?: Date): void => {
    setShowTimePicker(false);
    if (selectedTime) {
      setFormData({ ...formData, wakeUpTime: selectedTime });
    }
  };

  const onReturnDateChange = (event: any, selectedDate?: Date): void => {
    setShowReturnDatePicker(false);
    if (selectedDate) {
      setFormData({ ...formData, expectedReturnDate: selectedDate });
    }
  };

//   const toggleCheckbox = (option: string) => {
//     setFormData(prev =>(
//         ...preb

//     ));
//   };

//   const pickDocument = async (): Promise<void> => {
//     try {
//       const result = await DocumentPicker.pick({
//         type: [DocumentPicker.types.allFiles],
//       });
//       setSelectedFile(result[0]);
//     } catch (err) {
//       if (DocumentPicker.isCancel(err)) {
//         // User cancelled the picker
//       } else {
//         throw err;
//       }
//     }
//   };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Complete Your Profile</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personal Information</Text>

        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          value={formData.fullName}
          onChangeText={(text) => setFormData({ ...formData, fullName: text })}
          placeholder="Enter your full name"
        />

        <Text style={styles.label}>Date of Birth</Text>
        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
          <TextInput
            style={styles.input}
            value={formData.dateOfBirth.toLocaleDateString()}
            editable={false}
            placeholder="mm/dd/yyyy"
          />
        </TouchableOpacity>

        <Text style={styles.label}>Gender</Text>
        <View style={styles.radioGroup}>
          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setFormData({ ...formData, gender: 'male' })}
          >
            <View style={styles.radio}>
              {formData.gender === 'male' && <View style={styles.radioSelected} />}
            </View>
            <Text>Male</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setFormData({ ...formData, gender: 'female' })}
          >
            <View style={styles.radio}>
              {formData.gender === 'female' && <View style={styles.radioSelected} />}
            </View>
            <Text>Female</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setFormData({ ...formData, gender: 'other' })}
          >
            <View style={styles.radio}>
              {formData.gender === 'other' && <View style={styles.radioSelected} />}
            </View>
            <Text>Other</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Blood Group</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={formData.bloodGroup}
            onValueChange={(value: string) => setFormData({ ...formData, bloodGroup: value })}
            style={styles.picker}
          >
            <Picker.Item label="Select blood group" value="" />
            <Picker.Item label="A+" value="A+" />
            <Picker.Item label="A-" value="A-" />
            <Picker.Item label="B+" value="B+" />
            <Picker.Item label="B-" value="B-" />
            <Picker.Item label="O+" value="O+" />
            <Picker.Item label="O-" value="O-" />
            <Picker.Item label="AB+" value="AB+" />
            <Picker.Item label="AB-" value="AB-" />
          </Picker>
        </View>

        <View style={styles.row}>
          <View style={styles.halfWidth}>
            <Text style={styles.label}>Height (cm)</Text>
            <TextInput
              style={styles.input}
              value={formData.height}
              onChangeText={(text) => setFormData({ ...formData, height: text })}
              keyboardType="numeric"
              placeholder="Height in cm"
            />
          </View>

          <View style={styles.halfWidth}>
            <Text style={styles.label}>Weight (kg)</Text>
            <TextInput
              style={styles.input}
              value={formData.weight}
              onChangeText={(text) => setFormData({ ...formData, weight: text })}
              keyboardType="numeric"
              placeholder="Weight in kg"
            />
          </View>
        </View>

        <View style={styles.halfWidth}>    
            <Text style={styles.label}>Usual Wake Up Time</Text>
            <TouchableOpacity onPress={() => setShowTimePicker(true)}>
            <TextInput
                style={styles.input}
                value={formData.wakeUpTime.toLocaleTimeString()}
                editable={false}
                placeholder="Select time"
            />
            </TouchableOpacity>
        </View>

        <Text style={styles.label}>Current Location Status</Text>
        <View style={styles.radioGroup}>
          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setFormData({ ...formData, locationStatus: 'atHome' })}
          >
            <View style={styles.radio}>
              {formData.locationStatus === 'atHome' && <View style={styles.radioSelected} />}
            </View>
            <Text>At Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setFormData({ ...formData, locationStatus: 'travelling' })}
          >
            <View style={styles.radio}>
              {formData.locationStatus === 'travelling' && <View style={styles.radioSelected} />}
            </View>
            <Text>Travelling</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Information</Text>

        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          value={formData.phoneNumber}
          onChangeText={(text) => setFormData({ ...formData, phoneNumber: text })}
          keyboardType="phone-pad"
          placeholder="Enter phone number"
        />

        <Text style={styles.label}>Alternate Phone Number</Text>
        <TextInput
          style={styles.input}
          value={formData.alternatePhone}
          onChangeText={(text) => setFormData({ ...formData, alternatePhone: text })}
          keyboardType="phone-pad"
          placeholder="Enter alternate phone number"
        />

        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          value={formData.emailAddress}
          onChangeText={(text) => setFormData({ ...formData, emailAddress: text })}
          keyboardType="email-address"
          placeholder="Enter email address"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Emergency Contact Details</Text>
        <Text style={styles.label}>Next of Kin's Name</Text>
        <TextInput
            style={styles.input}
            value={formData.NofKname}
            onChangeText={(text) => setFormData({...formData, NofKname: text})}
            
        />
        <Text style={styles.label}>Next of Kin's Contact Number</Text>
        <TextInput
            style={styles.input}
            value={formData.NofKnumber}
            onChangeText={(text) => setFormData({...formData, NofKnumber: text})}
            
        />
        <Text style={styles.label}>Relationship with the Senior</Text>
        <TextInput
            style={styles.input}
            value={formData.RwSenior}
            onChangeText={(text) => setFormData({...formData, RwSenior: text})}
            
        />
        <Text style={styles.label}>Neighbor's Name</Text>
        <TextInput
            style={styles.input}
            value={formData.Neiname}
            onChangeText={(text) => setFormData({...formData, Neiname: text})}
            
        />
        <Text style={styles.label}>Neighbors Contact Number</Text>
        <TextInput
            style={styles.input}
            value={formData.NofKname}
            onChangeText={(text) => setFormData({...formData, NofKname: text})}
            
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Medical History</Text>
        <Text style={styles.label}>Existing Health Conditions</Text>
        <TextInput
            style={styles.input}
            value={formData.ExistingHealthConditions}
            onChangeText={(text) => setFormData({...formData, ExistingHealthConditions: text})}
            placeholder='List of any chronic illnesses'
            placeholderTextColor="#808080"
            
        />

        <Text style={styles.label}>Known Allergies</Text>
        <TextInput
            style={styles.input}
            value={formData.KnownAllergies}
            onChangeText={(text) => setFormData({...formData, KnownAllergies: text})}
            placeholder='Food, medications, environmental allergies'
            placeholderTextColor="#808080"
        />
        <Text style={styles.label}>Past Surgeries</Text>
        <TextInput
            style={styles.input}
            value={formData.PastSurgeries}
            onChangeText={(text) => setFormData({...formData, PastSurgeries: text})}
            placeholder='Include dates if available'
            placeholderTextColor="#808080"
        />


      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferred Medical Services</Text>
        <Text style={styles.label}> Preferred's Doctor Name</Text>
        <TextInput
            style={styles.input}
            value={formData.PrefDoctorsName}
            onChangeText={(text) => setFormData({...formData, PrefDoctorsName: text})}
            
        />
        <Text style={styles.label}>Doctor's Contact Number</Text>
        <TextInput
            style={styles.input}
            value={formData.PrefDoctorsName}
            onChangeText={(text) => setFormData({...formData, PrefDoctorsNumber: text})}
            
        />
        <Text style={styles.label}>Preferred Hospital/Clinic</Text>
        <TextInput
            style={styles.input}
            value={formData.PrefHospital}
            onChangeText={(text) => setFormData({...formData, PrefHospital: text})}
            
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Lifestyle Details</Text>
        <Text style={styles.label}>Activity Level</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={formData.ActivityLevel ? formData.ActivityLevel : ""}
            // value = {formData.ActivityLevel}
            onValueChange={(value: string) => setFormData({ ...formData, ActivityLevel: value })}
            style={[styles.picker, formData.ActivityLevel && { color: 'black' }]} 
            
          >
            <Picker.Item label="Select Activity Level" value="" />
            <Picker.Item label="Sedentary" value="SED" />
            <Picker.Item label="Moderately Active" value="MA" />
            <Picker.Item label="Highly Active" value="HA" />
          </Picker>

        </View>
        <Text style={styles.label}>Diet Preferences</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={formData.DietPref? formData.DietPref : ""}
            
            onValueChange={(value: string) => setFormData({ ...formData, DietPref: value })}
            style={[styles.picker, formData.DietPref && { color: "black" }]}
          >
            <Picker.Item label="Select diet preferences" value=""/>
            <Picker.Item label="Vegetarian" value="VEGE" />
            <Picker.Item label="Non Vegetarian" value="NVEG" />
            <Picker.Item label="Vegan" value="VEGA" />
            <Picker.Item label="Dietabetic Diet" value="DIAB" />
          </Picker>
          
        </View>
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Special Needs</Text>
        </View>
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Permissions and Consesnts</Text>
        </View>

      </View>

      {showDatePicker && (
        <DateTimePicker
          value={formData.dateOfBirth}
          mode="date"
          onChange={onDateChange}
        />
      )}

      {showTimePicker && (
        <DateTimePicker
          value={formData.wakeUpTime}
          mode="time"
          onChange={onTimeChange}
        />
      )}

      {showReturnDatePicker && (
        <DateTimePicker
          value={formData.expectedReturnDate}
          mode="date"
          onChange={onReturnDateChange}
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  radioGroup: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  radio: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  radioSelected: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#000',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 15,

  },
  picker: {
    height: 50,
    alignContent: "center",
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  halfWidth: {
    width: '48%',
  },
  uploadButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  uploadButtonText: {
    color: '#666',
  },
});

export default ProfileForm;