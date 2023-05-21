import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProgressBar from 'react-native-progress/Bar';

export default function App() {
  const handleIconPress = (url) => {
    Linking.openURL(url);
  };

  const handleButtonPress = () => {
   
    console.log('Button pressed');
  };

  return (
    <View style={styles.pageContainer}>
      <View style={styles.container}>
        <View style={styles.section}>
          <View style={styles.profileContainer}>
            <Image
              source={require('./assets/img.jpg')}
              style={styles.profileImage}
            />
          </View>
          <Text style={styles.whiteText}>Heba ibrahim</Text>
          <Text style={styles.whiteText}>Frontend Developer</Text>
          <Text style={[styles.sectionTitle, styles.whiteText]}>Personal Information</Text>
          <Text style={styles.whiteText}>Email: heba@gmail.com</Text>
          <Text style={styles.whiteText}>Phone: 123-456-7890</Text>
          <Text style={styles.whiteText}>Age: 26</Text>
        </View>
        <View style={styles.icons}>
          <TouchableOpacity
            style={[styles.icon, { backgroundColor: 'yellow', marginLeft: 0 }]}
            onPress={() => handleIconPress('https://web.whatsapp.com')}
          >
            <Icon name="whatsapp" size={30} color="#4AC959" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.icon, { backgroundColor: 'yellow', marginLeft: 5 }]}
            onPress={() => handleIconPress('https://www.facebook.com')}
          >
            <Icon name="facebook-square" size={30} color="#3b5998" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.icon, { backgroundColor: 'yellow', marginLeft: 5 }]}
            onPress={() => handleIconPress('https://www.twitter.com')}
          >
            <Icon name="twitter-square" size={30} color="#1da1f2" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.icon, { backgroundColor: 'yellow', marginLeft: 5 }]}
            onPress={() => handleIconPress('https://www.linkedin.com')}
          >
            <Icon name="linkedin-square" size={30} color="#0e76a8" />
          </TouchableOpacity>
        </View>
        <View style={styles.separator} />
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, styles.whiteText]}>Education</Text>
          <Text style={styles.whiteText}>Bachelor of Science in Computer Science</Text>
          <Text style={styles.whiteText}>University of XYZ</Text>
          <Text style={styles.whiteText}>Graduation Year: 2020</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, styles.whiteText]}>Work Experience</Text>
          <Text style={styles.whiteText}>Software Engineer</Text>
          <Text style={styles.whiteText}>ABC Company</Text>
          <Text style={styles.whiteText}>2018 - Present</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.section}>


     ...
          <Text style={[styles.sectionTitle, styles.whiteText]}>Languages</Text>
          <View style={styles.progressBarContainer}>
            <Text style={styles.progressLabelText}>Arabic</Text>
            <ProgressBar progress={0.8} width={200} color="#4AC959" />
          </View>
          <View style={styles.progressBarContainer}>
            <Text style={styles.progressLabelText}>English</Text>
            <ProgressBar progress={0.9} width={200} color="#4AC959" />
          </View>
          <View style={styles.progressBarContainer}>
            <Text style={styles.progressLabelText}>German</Text>
            <ProgressBar progress={0.6} width={200} color="#4AC959" />
          </View>
        </View>
        <View style={styles.separator} />
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, styles.whiteText]}>Skills</Text>
          <View style={styles.progressBarContainer}>
            <Text style={styles.progressLabelText}>HTML</Text>
            <ProgressBar progress={0.9} width={200} color="#4AC959" />
          </View>
          <View style={styles.progressBarContainer}>
            <Text style={styles.progressLabelText}>CSS</Text>
            <ProgressBar progress={0.8} width={200} color="#4AC959" />
          </View>
          <View style={styles.progressBarContainer}>
            <Text style={styles.progressLabelText}>Javascript</Text>
            <ProgressBar progress={0.7} width={200} color="#4AC959" />
          </View>
          <View style={styles.progressBarContainer}>
            <Text style={styles.progressLabelText}>PHP</Text>
            <ProgressBar progress={0.6} width={200} color="#4AC959" />
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>download</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: 300,
    backgroundColor: '#000000',
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 25,
    marginRight: 10,
    marginBottom: 20,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'left',
    margin: 20,
  },
  icon: {
    padding: 10,
    borderRadius: 20,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
    marginBottom: 20,
  },
  whiteText: {
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  progressLabelText: {
    marginRight: 10,
    color: '#FFFFFF',
  },
});


