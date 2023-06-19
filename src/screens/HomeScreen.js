import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const articles = [
    {
      title: 'Introduction to DevOps',
      subtext: 'Learn the fundamentals of DevOps and its importance in modern software development.',
    },
    {
      title: 'Continuous Integration and Deployment',
      subtext: 'Explore the CI/CD pipeline and discover how it enables faster and more reliable software releases.',
    },
    {
      title: 'The Art of Containerization',
      subtext: 'Discover the power of containerization with Docker and how it revolutionizes application deployment.',
    },
    {
      title: 'Machine Learning in Computer Vision',
      subtext: 'Explore the exciting field of computer vision and its applications in machine learning algorithms.',
    },
    {
      title: 'Algorithms and Data Structures',
      subtext: 'Learn essential algorithms and data structures for efficient problem-solving and software development.',
    },
    {
      title: 'Building Scalable Web Applications',
      subtext: 'Discover the techniques for designing and developing web applications that can handle high traffic loads.',
    },
    {
      title: 'Secure Coding Practices',
      subtext: 'Explore the best practices for writing secure code and protecting applications from common vulnerabilities.',
    },
    {
      title: 'Getting Started with Rust Programming',
      subtext: 'Learn the basics of Rust programming language and its unique features for safe and concurrent programming.',
    },
    {
      title: 'Functional Programming Paradigm',
      subtext: 'Discover the principles of functional programming and how it can improve code clarity and maintainability.',
    },
    {
      title: 'Automating Infrastructure with Ansible',
      subtext: 'Learn how to use Ansible to automate the provisioning and configuration of infrastructure resources.',
    },
  ];
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {articles.map((article, index) => (
        <View key={index} style={styles.articleContainer}>
          <Text style={styles.title}>{article.title}</Text>
          <Text style={styles.subtext}>{article.subtext}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  articleContainer: {
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  subtext: {
    fontSize: 14,
    color: '#ffffff',
    marginTop: 4,
  },
});

export default HomeScreen;
