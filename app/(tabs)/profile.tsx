import { View, Text, Image, StyleSheet, Button, ActivityIndicator, Animated, ToastAndroid } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SecureStore from "expo-secure-store";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import * as AuthSession from 'expo-auth-session'

WebBrowser.maybeCompleteAuthSession();

const Profile = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const redirectUri = AuthSession.makeRedirectUri();

  const [request, response, promptAsync] = Google.useAuthRequest({
    webClientId: "350300823747-m20a647k8i8oc336lmvdv5abpu9ak0pb.apps.googleusercontent.com",
    iosClientId: "350300823747-solghvjrhuq1t0u828qjtkgfvb7uo13c.apps.googleusercontent.com",
    androidClientId: "350300823747-d4a7r31u7p1frj9plff0cfi7sqqm1ahl.apps.googleusercontent.com",
    redirectUri: redirectUri
  }, );



  // Restore user session
  useEffect(() => {
    const restoreSession = async () => {
      try {
        setLoading(true);
        const token = await SecureStore.getItemAsync("userToken");
        if (token) {
          await fetchUserInfo(token);
        }
      } catch (error) {
        console.error("Failed to restore session:", error);
      } finally {
        setLoading(false);
      }
    };
    restoreSession();
  }, []);

  useEffect(() => {
    const handleAuthResponse = async () => {
      if (response?.type === "success") {
        const { accessToken } = response.authentication || {};
        ToastAndroid.show("Login Succeeded!", ToastAndroid.SHORT)
        if (accessToken) {
          await SecureStore.setItemAsync("userToken", accessToken);
          fetchUserInfo(accessToken);
        }
      }
    };
  
    handleAuthResponse();
  }, [response]);
  

  const fetchUserInfo = async (token: any) => {
    try {
      setLoading(true);
      const res = await fetch("https://www.googleapis.com/userinfo/v2/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const userInfo = await res.json();
      setUser(userInfo);
      await SecureStore.setItemAsync("userToken", token);
      fadeIn();
    } catch (error) {
      console.error("Failed to fetch user info:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      setLoading(true);
      await SecureStore.deleteItemAsync("userToken");
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#4CAF50" />
      ) : user ? (
        <Animated.View style={[styles.profileContainer, { opacity: fadeAnim }]}>
          <Image source={{ uri: user?.picture }} style={styles.profilePic} />
          <Text style={styles.name}>{user?.name}</Text>
          <Text style={styles.email}>{user?.email}</Text>
          <Button title="Logout" onPress={handleLogout} color="#E53935" disabled={loading} />
        </Animated.View>
      ) : (
        <Button title="Login with Google" disabled={!request || loading} onPress={() => promptAsync()} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
  },
  profileContainer: {
    alignItems: "center",
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: "#757575",
    marginBottom: 15,
  },
});

export default Profile;
