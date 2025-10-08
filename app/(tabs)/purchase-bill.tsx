import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeft, Upload, Download, Plus, Edit, Trash2, Filter, Camera, Calendar } from 'lucide-react-native';

export default function PurchaseBillDetailsScreen() {
  const [showList, setShowList] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    vendorName: '',
    date: '',
    block: '',
    invoiceNumber: '',
    billStatus: 'UnPaid',
    deliveryChallanStatus: 'No',
  });

  const bills = [
    { vendor: 'Vendor A', date: '2025-10-01', block: 'Block 1', invoice: 'INV001', billStatus: 'Paid', challan: 'Yes' },
    { vendor: 'Vendor B', date: '2025-10-02', block: 'Block 2', invoice: 'INV002', billStatus: 'UnPaid', challan: 'No' },
  ];

  const handleApprove = () => {
    alert('Bill Approved');
  };

  const handleReject = () => {
    alert('Bill Rejected');
  };

  const handleSubmit = () => {
    setShowForm(false);
    setShowList(true);
    setFormData({
      vendorName: '',
      date: '',
      block: '',
      invoiceNumber: '',
      billStatus: 'UnPaid',
      deliveryChallanStatus: 'No',
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
                <Text style={styles.headerTitle}>PURCHASE DATA BILL DETAILS</Text>
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
                    <Text style={styles.filterText}>Vendor Name</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.filterItem}>
                    <Text style={styles.filterText}>Date</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.filterItem}>
                    <Text style={styles.filterText}>Block</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.filterItem}>
                    <Text style={styles.filterText}>Invoice Number</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.filterItem}>
                    <Text style={styles.filterText}>Bill Upload</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.filterItem}>
                    <Text style={styles.filterText}>Bill Status</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.filterItem}>
                    <Text style={styles.filterText}>Delivery Challan</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.listArea}>
                  <View style={styles.filterIcon}>
                    <Filter size={24} color="#8B3A8B" />
                  </View>
                  {bills.map((bill, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.listItem}
                      onPress={() => {
                        setShowList(false);
                        setShowForm(true);
                        setFormData({
                          vendorName: bill.vendor,
                          date: bill.date,
                          block: bill.block,
                          invoiceNumber: bill.invoice,
                          billStatus: bill.billStatus,
                          deliveryChallanStatus: bill.challan,
                        });
                      }}
                    >
                      <Text style={styles.listItemText}>{bill.vendor} - {bill.invoice}</Text>
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
                  <Text style={styles.label}>Vendor Name</Text>
                  <TextInput
                    style={styles.input}
                    value={formData.vendorName}
                    onChangeText={(text) => setFormData({...formData, vendorName: text})}
                  />
                </View>

                <View style={styles.formGroup}>
                  <Text style={styles.label}>Date</Text>
                  <View style={styles.dateInput}>
                    <TextInput
                      style={styles.inputWithIcon}
                      value={formData.date}
                      onChangeText={(text) => setFormData({...formData, date: text})}
                      placeholder="YYYY-MM-DD"
                    />
                    <TouchableOpacity style={styles.iconButton}>
                      <Calendar size={20} color="#8B3A8B" />
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.formGroup}>
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

                <View style={styles.formGroup}>
                  <Text style={styles.label}>Invoice Number</Text>
                  <TextInput
                    style={styles.input}
                    value={formData.invoiceNumber}
                    onChangeText={(text) => setFormData({...formData, invoiceNumber: text})}
                  />
                </View>

                <View style={styles.formGroup}>
                  <Text style={styles.label}>Bill Upload</Text>
                  <TouchableOpacity style={styles.uploadButton}>
                    <Camera size={24} color="#8B3A8B" />
                  </TouchableOpacity>
                </View>

                <View style={styles.formGroup}>
                  <Text style={styles.label}>Bill Status</Text>
                  <View style={styles.radioGroup}>
                    <TouchableOpacity
                      style={styles.radioButton}
                      onPress={() => setFormData({...formData, billStatus: 'Paid'})}
                    >
                      <View style={[styles.radioOuter, formData.billStatus === 'Paid' && styles.radioSelected]}>
                        {formData.billStatus === 'Paid' && <View style={styles.radioInner} />}
                      </View>
                      <Text style={styles.radioLabel}>Paid</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.radioButton}
                      onPress={() => setFormData({...formData, billStatus: 'UnPaid'})}
                    >
                      <View style={[styles.radioOuter, formData.billStatus === 'UnPaid' && styles.radioSelected]}>
                        {formData.billStatus === 'UnPaid' && <View style={styles.radioInner} />}
                      </View>
                      <Text style={styles.radioLabel}>UnPaid</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.formGroup}>
                  <Text style={styles.label}>Delivery Challan Status</Text>
                  <View style={styles.radioGroup}>
                    <TouchableOpacity
                      style={styles.radioButton}
                      onPress={() => setFormData({...formData, deliveryChallanStatus: 'Yes'})}
                    >
                      <View style={[styles.radioOuter, formData.deliveryChallanStatus === 'Yes' && styles.radioSelected]}>
                        {formData.deliveryChallanStatus === 'Yes' && <View style={styles.radioInner} />}
                      </View>
                      <Text style={styles.radioLabel}>Yes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.radioButton}
                      onPress={() => setFormData({...formData, deliveryChallanStatus: 'No'})}
                    >
                      <View style={[styles.radioOuter, formData.deliveryChallanStatus === 'No' && styles.radioSelected]}>
                        {formData.deliveryChallanStatus === 'No' && <View style={styles.radioInner} />}
                      </View>
                      <Text style={styles.radioLabel}>No</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.approvalButtons}>
                  <TouchableOpacity style={styles.approveButton} onPress={handleApprove}>
                    <Text style={styles.approveButtonText}>Approve</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.rejectButton} onPress={handleReject}>
                    <Text style={styles.rejectButtonText}>Reject</Text>
                  </TouchableOpacity>
                </View>
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
    width: 100,
    gap: 5,
  },
  filterItem: {
    backgroundColor: '#D8A7D8',
    padding: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#8B3A8B',
  },
  filterText: {
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
  dateInput: {
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
    padding: 12,
    fontSize: 14,
    color: '#4A1A4A',
  },
  dropdownIcon: {
    paddingRight: 12,
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
  uploadButton: {
    backgroundColor: 'rgba(216, 167, 216, 0.3)',
    borderWidth: 2,
    borderColor: '#8B3A8B',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioGroup: {
    flexDirection: 'row',
    backgroundColor: 'rgba(216, 167, 216, 0.3)',
    borderWidth: 2,
    borderColor: '#8B3A8B',
    borderRadius: 8,
    padding: 12,
    gap: 30,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#8B3A8B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioSelected: {
    backgroundColor: 'rgba(216, 167, 216, 0.3)',
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#8B3A8B',
  },
  radioLabel: {
    color: '#8B3A8B',
    fontSize: 14,
    fontWeight: '600',
  },
  approvalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    gap: 10,
  },
  approveButton: {
    backgroundColor: '#8B3A8B',
    padding: 15,
    borderRadius: 25,
    flex: 1,
    alignItems: 'center',
  },
  approveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  rejectButton: {
    backgroundColor: '#8B3A8B',
    padding: 15,
    borderRadius: 25,
    flex: 1,
    alignItems: 'center',
  },
  rejectButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
