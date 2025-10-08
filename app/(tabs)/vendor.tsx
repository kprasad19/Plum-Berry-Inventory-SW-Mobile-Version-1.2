import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeft, Upload, Download, Plus, Edit, Trash2, Filter, MapPin } from 'lucide-react-native';

export default function VendorCatalogScreen() {
  const [showList, setShowList] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    vendorId: '',
    vendorName: '',
    gstNumber: '',
    address: '',
    contactPerson: '',
    mobileNumber: '',
    emailId: '',
  });

  const vendors = [
    { id: 'V001', name: 'Vendor A', gstNo: 'GST001', address: 'Address 1', contact: 'John', mobile: '1234567890', email: 'vendor@a.com' },
    { id: 'V002', name: 'Vendor B', gstNo: 'GST002', address: 'Address 2', contact: 'Jane', mobile: '0987654321', email: 'vendor@b.com' },
  ];

  const handleSubmit = () => {
    setShowForm(false);
    setShowList(true);
    setFormData({
      vendorId: '',
      vendorName: '',
      gstNumber: '',
      address: '',
      contactPerson: '',
      mobileNumber: '',
      emailId: '',
    });
  };

  return (
    <LinearGradient
      colors={['#F5E6F5', '#E6D5E6']}
      style={styles.container}
    >
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          {showList ? (
            <>
              <View style={styles.header}>
                <Text style={styles.headerTitle}>VENDOR CATALOG DETAILS</Text>
              </View>

              <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.actionButton}>
                  <Upload size={18} color="white" />
                  <Text style={styles.actionButtonText}>Upload</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                  <Download size={18} color="white" />
                  <Text style={styles.actionButtonText}>Download Template</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.addButton} onPress={() => { setShowList(false); setShowForm(true); }}>
                  <Plus size={18} color="white" />
                  <Text style={styles.actionButtonText}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.editButton}>
                  <Edit size={18} color="white" />
                  <Text style={styles.actionButtonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.deleteButton}>
                  <Trash2 size={18} color="white" />
                  <Text style={styles.actionButtonText}>Delete</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.listContainer}>
                <View style={styles.sidebar}>
                  <TouchableOpacity style={styles.filterItem}>
                    <Text style={styles.filterText}>Vendor ID</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.filterItem}>
                    <Text style={styles.filterText}>Vendor Name</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.filterItem}>
                    <Text style={styles.filterText}>GST No</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.filterItem}>
                    <Text style={styles.filterText}>Address</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.filterItem}>
                    <Text style={styles.filterText}>Contact Person</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.filterItem}>
                    <Text style={styles.filterText}>Mobile No</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.filterItem}>
                    <Text style={styles.filterText}>Email ID</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.listArea}>
                  <View style={styles.filterIcon}>
                    <Filter size={24} color="#8B3A8B" />
                  </View>
                  {vendors.map((vendor, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.listItem}
                      onPress={() => {
                        setShowList(false);
                        setShowForm(true);
                        setFormData({
                          vendorId: vendor.id,
                          vendorName: vendor.name,
                          gstNumber: vendor.gstNo,
                          address: vendor.address,
                          contactPerson: vendor.contact,
                          mobileNumber: vendor.mobile,
                          emailId: vendor.email,
                        });
                      }}
                    >
                      <Text style={styles.listItemText}>{vendor.name}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </>
          ) : showForm ? (
            <>
              <TouchableOpacity style={styles.backButton} onPress={() => { setShowList(true); setShowForm(false); }}>
                <ArrowLeft size={24} color="#8B3A8B" />
              </TouchableOpacity>

              <View style={styles.formCard}>
                <View style={styles.formGroup}>
                  <Text style={styles.label}>Vendor ID</Text>
                  <TextInput
                    style={styles.input}
                    value={formData.vendorId}
                    onChangeText={(text) => setFormData({...formData, vendorId: text})}
                  />
                </View>

                <View style={styles.formGroup}>
                  <Text style={styles.label}>Vendor Name</Text>
                  <TextInput
                    style={styles.input}
                    value={formData.vendorName}
                    onChangeText={(text) => setFormData({...formData, vendorName: text})}
                  />
                </View>

                <View style={styles.formGroup}>
                  <Text style={styles.label}>GST Number</Text>
                  <TextInput
                    style={styles.input}
                    value={formData.gstNumber}
                    onChangeText={(text) => setFormData({...formData, gstNumber: text})}
                  />
                </View>

                <View style={styles.formGroup}>
                  <Text style={styles.label}>Address</Text>
                  <View style={styles.addressInput}>
                    <TextInput
                      style={styles.inputWithIcon}
                      value={formData.address}
                      onChangeText={(text) => setFormData({...formData, address: text})}
                      multiline
                    />
                    <TouchableOpacity style={styles.iconButton}>
                      <MapPin size={20} color="#8B3A8B" />
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.formGroup}>
                  <Text style={styles.label}>Contact Person Name</Text>
                  <TextInput
                    style={styles.input}
                    value={formData.contactPerson}
                    onChangeText={(text) => setFormData({...formData, contactPerson: text})}
                  />
                </View>

                <View style={styles.formGroup}>
                  <Text style={styles.label}>Mobile Number</Text>
                  <TextInput
                    style={styles.input}
                    value={formData.mobileNumber}
                    onChangeText={(text) => setFormData({...formData, mobileNumber: text})}
                    keyboardType="phone-pad"
                  />
                </View>

                <View style={styles.formGroup}>
                  <Text style={styles.label}>Email ID</Text>
                  <TextInput
                    style={styles.input}
                    value={formData.emailId}
                    onChangeText={(text) => setFormData({...formData, emailId: text})}
                    keyboardType="email-address"
                  />
                </View>

                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                  <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
              </View>
            </>
          ) : null}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 100,
  },
  header: {
    backgroundColor: '#8B3A8B',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    gap: 10,
  },
  actionButton: {
    backgroundColor: '#8B3A8B',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    justifyContent: 'center',
    gap: 5,
  },
  addButton: {
    backgroundColor: '#D8A7D8',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    justifyContent: 'center',
    gap: 5,
  },
  editButton: {
    backgroundColor: '#D8A7D8',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    justifyContent: 'center',
    gap: 5,
  },
  deleteButton: {
    backgroundColor: '#D8A7D8',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    justifyContent: 'center',
    gap: 5,
  },
  actionButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  listContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  sidebar: {
    width: 120,
    gap: 5,
  },
  filterItem: {
    backgroundColor: '#D8A7D8',
    padding: 12,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#8B3A8B',
  },
  filterText: {
    color: '#4A1A4A',
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listArea: {
    flex: 1,
    backgroundColor: 'rgba(216, 167, 216, 0.3)',
    borderWidth: 2,
    borderColor: '#8B3A8B',
    borderRadius: 10,
    padding: 10,
    minHeight: 400,
  },
  filterIcon: {
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  listItem: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#8B3A8B',
  },
  listItemText: {
    color: '#8B3A8B',
    fontSize: 14,
    fontWeight: '600',
  },
  backButton: {
    backgroundColor: 'white',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#8B3A8B',
  },
  formCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 15,
    padding: 20,
    borderWidth: 2,
    borderColor: '#8B3A8B',
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    color: '#8B3A8B',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    backgroundColor: 'rgba(216, 167, 216, 0.3)',
    borderWidth: 2,
    borderColor: '#8B3A8B',
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    color: '#4A1A4A',
  },
  addressInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(216, 167, 216, 0.3)',
    borderWidth: 2,
    borderColor: '#8B3A8B',
    borderRadius: 8,
  },
  inputWithIcon: {
    flex: 1,
    padding: 12,
    fontSize: 14,
    color: '#4A1A4A',
  },
  iconButton: {
    padding: 12,
  },
  submitButton: {
    backgroundColor: '#8B3A8B',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
