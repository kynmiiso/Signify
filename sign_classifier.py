import mediapipe as mp 
import cv2
import pickle
import numpy as np

model_dict = pickle.load(open('./model.pickle', 'rb'))
model = model_dict['model']

mp_drawing = mp.solutions.drawing_utils
mp_drawing_styles = mp.solutions.drawing_styles
mp_hands = mp.solutions.hands

hands = mp_hands.Hands(static_image_mode=True, min_detection_confidence=0.3)

cap = cv2.VideoCapture(0)

while True: 

    x_coords = []
    y_coords = []

    frame_data = []

    ret, frame = cap.read()

    height = frame.shape[0]
    width = frame.shape[1]

    frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    results = hands.process(frame_rgb)

    if results.multi_hand_landmarks: 
        for hand_landmarks in results.multi_hand_landmarks:
            mp_drawing.draw_landmarks(
                frame,
                hand_landmarks,
                mp_hands.HAND_CONNECTIONS,
                mp_drawing_styles.get_default_hand_landmarks_style(),
                mp_drawing_styles.get_default_hand_connections_style())
            
            for i in range(len(hand_landmarks.landmark)):
                x = hand_landmarks.landmark[i].x
                y = hand_landmarks.landmark[i].y
                frame_data.append(x)
                frame_data.append(y)
                x_coords.append(x)
                y_coords.append(y)
                
            x1 = int(min(x_coords) * width)
            y1 = int(min(y_coords) * height)

            x2 = int(max(x_coords) * width)
            y2 = int(max(y_coords) * height)

            prediction = model.predict([np.asarray(frame_data)])[0]

        cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 0, 0), 4)
        cv2.putText(frame, prediction, (x1, y1 - 10), cv2.FONT_HERSHEY_SIMPLEX, 1.3, (0, 0, 0), 3, cv2.LINE_AA)
    
    cv2.imshow('frame', frame)
    cv2.waitKey(1)

    def get_prediction():
        return prediction

cap.release()
cv2.destroyAllWindows()