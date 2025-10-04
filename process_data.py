import os 
import pickle

import mediapipe as mp 
import cv2
import matplotlib.pyplot as plot

mp_drawing = mp.solutions.drawing_utils
mp_drawing_styles = mp.solutions.drawing_styles
mp_hands = mp.solutions.hands

hands = mp_hands.Hands(static_image_mode=True, min_detection_confidence=0.3)

data_dir = './data'

data = [] 
labels = [] 

for dir in os.listdir(data_dir):
    for image_path in os.listdir(os.path.join(data_dir, dir)): 
        image_data = []
        image = cv2.imread(os.path.join(data_dir, dir, image_path))
        image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

        results = hands.process(image_rgb)

        if results.multi_hand_landmarks:
            for hand_landmarks in results.multi_hand_landmarks:
                # drawing hand landmarks on dataset images 
                # mp_drawing.draw_landmarks(
                #     image_rgb,
                #     hand_landmarks,
                #     mp_hands.HAND_CONNECTIONS,
                #     mp_drawing_styles.get_default_hand_landmarks_style(),
                #     mp_drawing_styles.get_default_hand_connections_style())
                for i in range(len(hand_landmarks.landmark)):
                    x = hand_landmarks.landmark[i].x
                    y = hand_landmarks.landmark[i].y
                    image_data.append(x)
                    image_data.append(y)
            if len(image_data) == 42:
                data.append(image_data)
                labels.append(dir)
                

        # plot.figure()
        # plot.imshow(image_rgb)

# plot.show()
f = open('data.pickle', 'wb')
pickle.dump({'data': data, 'labels': labels}, f)
f.close()