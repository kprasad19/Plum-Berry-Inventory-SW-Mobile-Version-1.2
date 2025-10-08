import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeft, Upload, Download, Plus, Edit, Trash2, Filter, Camera, Calendar, PlusCircle } from 'lucide-react-native';

export default function PurchaseDataDetailsScreen() {
  const [showList, setShowList] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showChallanModal, setShowChallanModal] = useState(false);
  const [formData, setFormData] = useState({
    vendorName: '',
    date: '',
    block: '',
    billUpload: '',
    sku: '',
    productName: '',
    brand: '',
    category: '',
    quantity: '',
    mrp: '',
    landingPrice: '',
    gst: '',
    unitPrice: '',
    mfgExpUpload: '',
    manufactureDate: '',
    expiryDate: '',
  });

  const purchases = [
    { vendor: 'Vendor A', date: '2025-10-01', block: 'Block 1', sku: 'SKU001', product: 'Product A' },
    { vendor: 'Vendor B', date: '2025-10-02', block: 'Block 2', sku: 'SKU002', product: 'Product B' },
  ];

  const handleSubmit = () => {
    setShowForm(false);
    setShowList(true);
    setFormData({
      vendorName: '',
      date: '',
      block: '',
      billUpload: '',
      sku: '',
      productName: '',
      brand: '',
      category: '',
      quantity: '',
      mrp: '',
      landingPrice: '',
      gst: '',
      unitPrice: '',
      mfgExpUpload: '',
      manufactureDate: '',
      expiryDate: '',
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
                <Text style={styles.headerTitle}>PURCHASE DATA DETAILS</Text>
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

              <View style={styles.buttonRowThree}>
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

              <View style={styles.specialButtons}>
                <TouchableOpacity style={styles.approveButton}>
                  <Text style={styles.specialButtonText}>Approve Details</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.purchaseButton}>
                  <Text style={styles.specialButtonText}>Purchase Details</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.deliveryButton} onPress={() => setShowChallanModal(true)}>
                  <Text style={styles.specialButtonText}>Delivery Challans</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.listContainer}>
                <View style={styles.sidebar}>
                  <TouchableOpacity style={styles.filterItemSmall}>
                    <Text style={styles.filterTextSmall}>Approve Details</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.filterItemSmall}>
                    <Text style={styles.filterTextSmall}>Purchase Details</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.filterItemSmall}>
                    <Text style={styles.filterTextSmall}>Delivery Challans</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.listArea}>
                  <View style={styles.filterIcon}>
                    <Filter size={24} color="#8B3A8B" />
                  </View>
                  {purchases.map((purchase, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.listItem}
                      onPress={() => {
                        setShowList(false);
                        setShowForm(true);
                      }}
                    >
                      <Text style={styles.listItemText}>{purchase.vendor} - {purchase.product}</Text>
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
                <View style={styles.formRow}>
                  <View style={styles.formGroupHalf}>
                    <Text style={styles.label}>Vendor Name</Text>
                    <TextInput
                      style={styles.input}
                      value={formData.vendorName}
                      onChangeText={(text) => setFormData({...formData, vendorName: text})}
                    />
                  </View>
                  <View style={styles.formGroupHalf}>
                    <Text style={styles.label}>Date</Text>
                    <View style={styles.dateInput}>
                      <TextInput
                        style={styles.inputWithIconSmall}
                        value={formData.date}
                        onChangeText={(text) => setFormData({...formData, date: text})}
                      />
                      <TouchableOpacity style={styles.iconButtonSmall}>
                        <Calendar size={18} color="#8B3A8B" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <View style={styles.formRow}>
                  <View style={styles.formGroupHalf}>
                    <Text style={styles.label}>Block</Text>
                    <View style={styles.dropdown}>
                      <TextInput
                        style={styles.dropdownInput}
                        value={formData.block}
                        onChangeText={(text) => setFormData({...formData, block: text})}
                      />
                      <View style={styles.dropdownIcon}>
                        <View style={styles.triangle} />
                      </View>
                    </View>
                  </View>
                  <View style={styles.formGroupHalf}>
                    <Text style={styles.label}>Bill Upload</Text>
                    <TouchableOpacity style={styles.uploadButtonSmall}>
                      <Camera size={20} color="#8B3A8B" />
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.formRow}>
                  <View style={styles.formGroupHalf}>
                    <Text style={styles.label}>SKU</Text>
                    <TextInput
                      style={styles.input}
                      value={formData.sku}
                      onChangeText={(text) => setFormData({...formData, sku: text})}
                    />
                  </View>
                  <View style={styles.formGroupHalf}>
                    <Text style={styles.label}>Product Name</Text>
                    <TextInput
                      style={styles.input}
                      value={formData.productName}
                      onChangeText={(text) => setFormData({...formData, productName: text})}
                    />
                  </View>
                </View>

                <View style={styles.formRow}>
                  <View style={styles.formGroupHalf}>
                    <Text style={styles.label}>Brand</Text>
                    <View style={styles.dropdown}>
                      <TextInput
                        style={styles.dropdownInput}
                        value={formData.brand}
                        onChangeText={(text) => setFormData({...formData, brand: text})}
                      />
                      <View style={styles.dropdownIcon}>
                        <View style={styles.triangle} />
                      </View>
                    </View>
                  </View>
                  <View style={styles.formGroupHalf}>
                    <Text style={styles.label}>Category</Text>
                    <TextInput
                      style={styles.input}
                      value={formData.category}
                      onChangeText={(text) => setFormData({...formData, category: text})}
                    />
                  </View>
                </View>

                <View style={styles.formRow}>
                  <View style={styles.formGroupHalf}>
                    <Text style={styles.label}>Quantity</Text>
                    <TextInput
                      style={styles.input}
                      value={formData.quantity}
                      onChangeText={(text) => setFormData({...formData, quantity: text})}
                      keyboardType="numeric"
                    />
                  </View>
                  <View style={styles.formGroupHalf}>
                    <Text style={styles.label}>MRP</Text>
                    <TextInput
                      style={styles.input}
                      value={formData.mrp}
                      onChangeText={(text) => setFormData({...formData, mrp: text})}
                      keyboardType="numeric"
                    />
                  </View>
                </View>

                <View style={styles.formRow}>
                  <View style={styles.formGroupHalf}>
                    <Text style={styles.label}>Landing Price (With/Without GST)</Text>
                    <View style={styles.dropdown}>
                      <TextInput
                        style={styles.dropdownInput}
                        value={formData.landingPrice}
                        onChangeText={(text) => setFormData({...formData, landingPrice: text})}
                        keyboardType="numeric"
                      />
                      <View style={styles.dropdownIcon}>
                        <View style={styles.triangle} />
                      </View>
                    </View>
                  </View>
                  <View style={styles.formGroupHalf}>
                    <Text style={styles.label}>GST(%)</Text>
                    <View style={styles.dropdown}>
                      <TextInput
                        style={styles.dropdownInput}
                        value={formData.gst}
                        onChangeText={(text) => setFormData({...formData, gst: text})}
                        keyboardType="numeric"
                      />
                      <View style={styles.dropdownIcon}>
                        <View style={styles.triangle} />
                      </View>
                    </View>
                  </View>
                </View>

                <View style={styles.formRow}>
                  <View style={styles.formGroupHalf}>
                    <Text style={styles.label}>Unit Price</Text>
                    <TextInput
                      style={styles.input}
                      value={formData.unitPrice}
                      onChangeText={(text) => setFormData({...formData, unitPrice: text})}
                      keyboardType="numeric"
                    />
                  </View>
                  <View style={styles.formGroupHalf}>
                    <Text style={styles.label}>MFG/EXP Upload</Text>
                    <TouchableOpacity style={styles.uploadButtonSmall}>
                      <Camera size={20} color="#8B3A8B" />
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.formRow}>
                  <View style={styles.formGroupHalf}>
                    <Text style={styles.label}>Manufacture Date</Text>
                    <View style={styles.dateInput}>
                      <TextInput
                        style={styles.inputWithIconSmall}
                        value={formData.manufactureDate}
                        onChangeText={(text) => setFormData({...formData, manufactureDate: text})}
                      />
                      <TouchableOpacity style={styles.iconButtonSmall}>
                        <Calendar size={18} color="#8B3A8B" />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.formGroupHalf}>
                    <Text style={styles.label}>Expiry Date</Text>
                    <View style={styles.dateInput}>
                      <TextInput
                        style={styles.inputWithIconSmall}
                        value={formData.expiryDate}
                        onChangeText={(text) => setFormData({...formData, expiryDate: text})}
                      />
                      <TouchableOpacity style={styles.iconButtonSmall}>
                        <Calendar size={18} color="#8B3A8B" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                  <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
              </View>
            </>
          ) : null}
        </View>
      </ScrollView>

      <Modal
        visible={showChallanModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowChallanModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.addChallanButton}
              onPress={() => {
                setShowChallanModal(false);
                alert('Add Delivery Challan');
              }}
            >
              <PlusCircle size={24} color="white" />
              <Text style={styles.addChallanText}>Delivery Challan</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.closeModalButton}
              onPress={() => setShowChallanModal(false)}
            >
              <Text style={styles.closeModalText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  buttonRowThree: {
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
  specialButtons: {
    flexDirection: 'row',
    marginBottom: 15,
    gap: 10,
  },
  approveButton: {
    backgroundColor: '#D8A7D8',
    padding: 10,
    borderRadius: 8,
    flex: 1,
    borderWidth: 2,
    borderColor: '#8B3A8B',
  },
  purchaseButton: {
    backgroundColor: '#D8A7D8',
    padding: 10,
    borderRadius: 8,
    flex: 1,
    borderWidth: 2,
    borderColor: '#8B3A8B',
  },
  deliveryButton: {
    backgroundColor: '#D8A7D8',
    padding: 10,
    borderRadius: 8,
    flex: 1,
    borderWidth: 2,
    borderColor: '#8B3A8B',
  },
  specialButtonText: {
    color: '#4A1A4A',
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  sidebar: {
    width: 100,
    gap: 5,
  },
  filterItemSmall: {
    backgroundColor: '#D8A7D8',
    padding: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#8B3A8B',
    marginBottom: 5,
  },
  filterTextSmall: {
    color: '#4A1A4A',
    fontSize: 10,
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
    minHeight: 300,
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
  formRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 15,
  },
  formGroupHalf: {
    flex: 1,
  },
  label: {
    color: '#8B3A8B',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    backgroundColor: 'rgba(216, 167, 216, 0.3)',
    borderWidth: 2,
    borderColor: '#8B3A8B',
    borderRadius: 8,
    padding: 10,
    fontSize: 12,
    color: '#4A1A4A',
  },
  dateInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(216, 167, 216, 0.3)',
    borderWidth: 2,
    borderColor: '#8B3A8B',
    borderRadius: 8,
  },
  inputWithIconSmall: {
    flex: 1,
    padding: 10,
    fontSize: 12,
    color: '#4A1A4A',
  },
  iconButtonSmall: {
    padding: 10,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(216, 167, 216, 0.3)',
    borderWidth: 2,
    borderColor: '#8B3A8B',
    borderRadius: 8,
  },
  dropdownInput: {
    flex: 1,
    padding: 10,
    fontSize: 12,
    color: '#4A1A4A',
  },
  dropdownIcon: {
    paddingRight: 10,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 8,
    borderRightWidth: 6,
    borderBottomWidth: 0,
    borderLeftWidth: 6,
    borderTopColor: '#8B3A8B',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  },
  uploadButtonSmall: {
    backgroundColor: 'rgba(216, 167, 216, 0.3)',
    borderWidth: 2,
    borderColor: '#8B3A8B',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 30,
    alignItems: 'center',
    minWidth: 250,
  },
  addChallanButton: {
    backgroundColor: '#8B3A8B',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 25,
    gap: 10,
    marginBottom: 15,
  },
  addChallanText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeModalButton: {
    padding: 10,
  },
  closeModalText: {
    color: '#8B3A8B',
    fontSize: 14,
    fontWeight: '600',
  },
});
