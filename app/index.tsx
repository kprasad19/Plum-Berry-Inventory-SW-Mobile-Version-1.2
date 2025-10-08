import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Eye, EyeOff } from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

export default function LoginScreen() {
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);
  const router = useRouter();

  const roles = ['Admin', 'Manager', 'Staff', 'Viewer'];

  const handleLogin = () => {
    router.push('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#8B3A8B', '#D8A7D8', '#8B3A8B']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <View style={styles.loginCard}>
          <View style={styles.logoContainer}>
            <View style={styles.logoFrame}>
              <Text style={styles.logoText}>PLUM BERRY</Text>
            </View>
          </View>

          <View style={styles.formContainer}>
            <TouchableOpacity
              style={styles.dropdown}
              onPress={() => setShowRoleDropdown(!showRoleDropdown)}
            >
              <Text style={[styles.dropdownText, !role && styles.placeholderText]}>
                {role || 'Roles'}
              </Text>
              <View style={styles.dropdownIcon}>
                <View style={styles.triangle} />
              </View>
            </TouchableOpacity>

            {showRoleDropdown && (
              <View style={styles.dropdownMenu}>
                {roles.map((r) => (
                  <TouchableOpacity
                    key={r}
                    style={styles.dropdownItem}
                    onPress={() => {
                      setRole(r);
                      setShowRoleDropdown(false);
                    }}
                  >
                    <Text style={styles.dropdownItemText}>{r}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}

            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="#8B3A8B"
              value={username}
              onChangeText={setUsername}
            />

            <View style={styles.passwordContainer}>
              <TextInput
                style={[styles.input, styles.passwordInput]}
                placeholder="Password"
                placeholderTextColor="#8B3A8B"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff size={24} color="#8B3A8B" />
                ) : (
                  <Eye size={24} color="#8B3A8B" />
                )}
              </TouchableOpacity>
            </View>

            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Forgot Password</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <LinearGradient
                colors={['#7B2869', '#8B3A8B']}
                style={styles.loginButtonGradient}
              >
                <Text style={styles.loginButtonText}>Login</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loginCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 20,
    padding: 30,
    width: '100%',
    maxWidth: 350,
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 30,
  },
  logoFrame: {
    borderWidth: 3,
    borderColor: '#8B3A8B',
    borderRadius: 15,
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  logoText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#8B3A8B',
    letterSpacing: 2,
  },
  formContainer: {
    width: '100%',
  },
  dropdown: {
    backgroundColor: 'rgba(216, 167, 216, 0.3)',
    borderWidth: 2,
    borderColor: '#8B3A8B',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownText: {
    fontSize: 16,
    color: '#8B3A8B',
    fontWeight: '600',
  },
  placeholderText: {
    opacity: 0.7,
  },
  dropdownIcon: {
    width: 0,
    height: 0,
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
  dropdownMenu: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#8B3A8B',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
  },
  dropdownItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#D8A7D8',
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#8B3A8B',
  },
  input: {
    backgroundColor: 'rgba(216, 167, 216, 0.3)',
    borderWidth: 2,
    borderColor: '#8B3A8B',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
    color: '#8B3A8B',
  },
  passwordContainer: {
    position: 'relative',
  },
  passwordInput: {
    paddingRight: 50,
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: 13,
  },
  forgotPassword: {
    color: '#8B3A8B',
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 14,
    fontWeight: '600',
  },
  loginButton: {
    borderRadius: 25,
    overflow: 'hidden',
    marginTop: 10,
  },
  loginButtonGradient: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
