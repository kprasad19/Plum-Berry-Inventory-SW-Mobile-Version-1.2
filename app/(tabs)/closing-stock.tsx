import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeft, Upload, Download, Plus, Edit, Trash2, Filter, Calendar } from 'lucide-react-native';

export default function ClosingStockDetailsScreen() {
  const [showList, setShowList] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    closingStockId: '',
    sku: '',
    productName: '',
    block: '',
    quantity: '',
    manufactureDate: '',
    expiryDate: '',
  });

  const stocks = [
    { id: 'CS001', sku: 'SKU001', product: 'Product A', block: 'Block 1', quantity: '100', mfg: '2025-01-01', exp: '2026-01-01' },
    { id: 'CS002', sku: 'SKU002', product: 'Product B', block: 'Block 2', quantity: '200', mfg: '2025-02-01', exp: '2026-02-01' },
  ];

  const handleSubmit = () => {
    setShowForm(false);
    setShowList(true);
    setFormData({
      closingStockId: '',
      sku: '',
      productName: '',
      block: '',
      quantity: '',
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
                <Text style={styles.headerTitle}>CLOSING STOCK DETAILS</Text>
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
                    <Text style={styles.filterText}>Closing Stock ID</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.filterItem}>
                    <Text style={styles.filterText}>SKU</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.filterItem}>
                    <Text style={styles.filterText}>Product Name</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.filterItem}>
                    <Text style={styles.filterText}>Block</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.filterItem}>
                    <Text style={styles.filterText}>Quantity</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.filterItem}>
                    <Text style={styles.filterText}>MFG</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.filterItem}>
                    <Text style={styles.filterText}>EXP</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.listArea}>
                  <View style={styles.filterIcon}>
                    <Filter size={24} color="#8B3A8B" />
                  </View>
                  {stocks.map((stock, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.listItem}
                      onPress={() => {
                        setShowList(false);
                        setShowForm(true);
                        setFormData({
                          closingStockId: stock.id,
                          sku: stock.sku,
                          productName: stock.product,
                          block: stock.block,
                          quantity: stock.quantity,
                          manufactureDate: stock.mfg,
                          expiryDate: stock.exp,
                        });
                      }}
                    >
                      <Text style={styles.listItemText}>{stock.id} - {stock.product}</Text>
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
                  <Text style={styles.label}>Closing Stock ID</Text>
                  <TextInput
                    style={styles.input}
                    value={formData.closingStockId}
                    onChangeText={(text) => setFormData({...formData, closingStockId: text})}
                  />
                </View>

                <View style={styles.formGroup}>
                  <Text style={styles.label}>SKU</Text>
                  <TextInput
                    style={styles.input}
                    value={formData.sku}
                    onChangeText={(text) => setFormData({...formData, sku: text})}
                  />
                </View>

                <View style={styles.formGroup}>
                  <Text style={styles.label}>Product Name</Text>
                  <TextInput
                    style={styles.input}
                    value={formData.productName}
                    onChangeText={(text) => setFormData({...formData, productName: text})}
                  />
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
                  <Text style={styles.label}>Quantity</Text>
                  <TextInput
                    style={styles.input}
                    value={formData.quantity}
                    onChangeText={(text) => setFormData({...formData, quantity: text})}
                    keyboardType="numeric"
                  />
                </View>

                <View style={styles.formGroup}>
                  <Text style={styles.label}>Manufacture Date</Text>
                  <View style={styles.dateInput}>
                    <TextInput
                      style={styles.inputWithIcon}
                      value={formData.manufactureDate}
                      onChangeText={(text) => setFormData({...formData, manufactureDate: text})}
                      placeholder="YYYY-MM-DD"
                    />
                    <TouchableOpacity style={styles.iconButton}>
                      <Calendar size={20} color="#8B3A8B" />
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.formGroup}>
                  <Text style={styles.label}>Expiry Date</Text>
                  <View style={styles.dateInput}>
                    <TextInput
                      style={styles.inputWithIcon}
                      value={formData.expiryDate}
                      onChangeText={(text) => setFormData({...formData, expiryDate: text})}
                      placeholder="YYYY-MM-DD"
                    />
                    <TouchableOpacity style={styles.iconButton}>
                      <Calendar size={20} color="#8B3A8B" />
                    </TouchableOpacity>
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
