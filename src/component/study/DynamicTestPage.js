import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to get route params
import TestPage from './TestPage'; // Reusable Test Page Component
import StudyPageIcon1 from './image/listening.png';
import StudyPageIcon2 from './image/reading.png';
import StudyPageIcon3 from './image/broken-pencil.png';
import StudyPageIcon4 from './image/reporter.png';

// Define test data for all categories
const testData = {
  academic: {
    1: [
      { icon: StudyPageIcon1, title: 'AC LISTENING 1' },
      { icon: StudyPageIcon2, title: 'AC READING 1' },
      { icon: StudyPageIcon3, title: 'AC CAM 1' },
      { icon: StudyPageIcon4, title: 'AC TEST 1' },
    ],
    2: [
      { icon: StudyPageIcon1, title: 'AC LISTENING 2' },
      { icon: StudyPageIcon2, title: 'AC READING 2' },
      { icon: StudyPageIcon3, title: 'AC CAM 2' },
      { icon: StudyPageIcon4, title: 'AC TEST 2' },
    ],
    3: [
      { icon: StudyPageIcon1, title: 'AC LISTENING 3' },
      { icon: StudyPageIcon2, title: 'AC READING 3' },
      { icon: StudyPageIcon3, title: 'AC CAM 3' },
      { icon: StudyPageIcon4, title: 'AC TEST 3' },
    ],
    4: [
      { icon: StudyPageIcon1, title: 'AC LISTENING 4' },
      { icon: StudyPageIcon2, title: 'AC READING 4' },
      { icon: StudyPageIcon3, title: 'AC CAM 4' },
      { icon: StudyPageIcon4, title: 'AC TEST 4' },
    ],
    5: [
      { icon: StudyPageIcon1, title: 'AC LISTENING 5' },
      { icon: StudyPageIcon2, title: 'AC READING 5' },
      { icon: StudyPageIcon3, title: 'AC CAM 5' },
      { icon: StudyPageIcon4, title: 'AC TEST 5' },
    ]
  },
  "general-training": {
    1: [
      { icon: StudyPageIcon1, title: 'GT LISTENING 1' },
      { icon: StudyPageIcon2, title: 'GT READING 1' },
      { icon: StudyPageIcon3, title: 'GT CAM 1' },
      { icon: StudyPageIcon4, title: 'GT TEST 1' },
    ],
    2: [
      { icon: StudyPageIcon1, title: 'GT LISTENING 2' },
      { icon: StudyPageIcon2, title: 'GT READING 2' },
      { icon: StudyPageIcon3, title: 'GT CAM 2' },
      { icon: StudyPageIcon4, title: 'GT TEST 2' },
    ],
    3: [
      { icon: StudyPageIcon1, title: 'GT LISTENING 3' },
      { icon: StudyPageIcon2, title: 'GT READING 3' },
      { icon: StudyPageIcon3, title: 'GT CAM 3' },
      { icon: StudyPageIcon4, title: 'GT TEST 3' },
    ]
  },
  "advanced-practice-test": {
    1: [
      { icon: StudyPageIcon1, title: 'APT LISTENING 1' },
      { icon: StudyPageIcon2, title: 'APT READING 1' },
      { icon: StudyPageIcon3, title: 'APT CAM 1' },
      { icon: StudyPageIcon4, title: 'APT TEST 1' },
    ]
  },
};

function DynamicTestPage() {
  const { category } = useParams(); // Get the selected category from the URL
  const data = testData[category]; // Get the test data for the selected category
  const pageTitle = category.replace("-", " "); // Convert slug to readable format

  if (!data) {
    return <div>Page not found</div>; // Handle invalid categories
  }

  return (
    <div>
      <TestPage testData={data} pageTitle={pageTitle} />
    </div>
  );
}

export default DynamicTestPage;
