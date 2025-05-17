import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#000000', '#1a1a1a', '#2d2d2d']}
        style={styles.background}>
        <View style={styles.header}>
          <Text style={styles.title}>DrivingTest</Text>
          <Text style={styles.subtitle}>Master your driving skills</Text>
        </View>

        <View style={styles.content}>
          {/* Quick Start Button - Updated navigation */}
          <TouchableOpacity
            style={[styles.card, styles.primaryCard]}
            onPress={() =>
              navigation.navigate('Test', {
                testType: 'full',
                title: 'Full Driving Test',
              })
            }>
            <View style={styles.cardContent}>
              <Icon name="car" size={30} color="#fff" />
              <View>
                <Text style={styles.cardTitle}>Start Test</Text>
                <Text style={styles.cardText}>Take a full driving test</Text>
              </View>
            </View>
            <Icon name="chevron-right" size={24} color="#fff" />
          </TouchableOpacity>

          {/* Practice Section */}
          <Text style={styles.sectionTitle}>Practice Tests</Text>

          <TouchableOpacity
            style={[styles.card, styles.secondaryCard]}
            onPress={() => navigation.navigate('RoadSigns')}>
            <View style={styles.cardContent}>
              <View
                style={[
                  styles.iconContainer,
                  {backgroundColor: 'rgba(76, 175, 80, 0.2)'},
                ]}>
                <Icon name="traffic-light" size={24} color="#4CAF50" />
              </View>
              <Text style={[styles.cardTitle, {color: '#fff'}]}>
                Road Signs
              </Text>
            </View>
            <Icon name="chevron-right" size={24} color="#4CAF50" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.card, styles.secondaryCard]}
            onPress={() => navigation.navigate('Rules')}>
            <View style={styles.cardContent}>
              <View
                style={[
                  styles.iconContainer,
                  {backgroundColor: 'rgba(33, 150, 243, 0.2)'},
                ]}>
                <Icon name="book" size={24} color="#2196F3" />
              </View>
              <Text style={[styles.cardTitle, {color: '#fff'}]}>
                Rules & Laws
              </Text>
            </View>
            <Icon name="chevron-right" size={24} color="#2196F3" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.card, styles.secondaryCard]}
            onPress={() => navigation.navigate('Safety')}>
            <View style={styles.cardContent}>
              <View
                style={[
                  styles.iconContainer,
                  {backgroundColor: 'rgba(255, 87, 34, 0.2)'},
                ]}>
                <Icon name="alert-octagon" size={24} color="#FF5722" />
              </View>
              <Text style={[styles.cardTitle, {color: '#fff'}]}>
                Safety Tips
              </Text>
            </View>
            <Icon name="chevron-right" size={24} color="#FF5722" />
          </TouchableOpacity>
        </View>

        {/* Bottom Navigation */}
        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem}>
            <Icon name="home" size={24} color="#3F51B5" />
            <Text style={[styles.navText, {color: '#3F51B5'}]}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Icon name="history" size={24} color="#aaa" />
            <Text style={[styles.navText, {color: '#aaa'}]}>History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Icon name="star" size={24} color="#aaa" />
            <Text style={[styles.navText, {color: '#aaa'}]}>Progress</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Icon name="cog" size={24} color="#aaa" />
            <Text style={[styles.navText, {color: '#aaa'}]}>Settings</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  background: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#aaa',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
  },
  primaryCard: {
    backgroundColor: '#3F51B5',
  },
  secondaryCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    padding: 10,
    borderRadius: 10,
    marginRight: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardText: {
    fontSize: 14,
    color: '#eee',
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 25,
    marginBottom: 15,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    marginTop: 5,
  },
});

export default HomeScreen;
