import os

import cv2

data_dir = './data'
if not os.path.exists(data_dir):
    os.makedirs(data_dir)

name_class = input("What sign do you want to add? ")
dataset_size = 70

cap = cv2.VideoCapture(0)

if not os.path.exists(os.path.join(data_dir, str(name_class))):
    os.makedirs(os.path.join(data_dir, str(name_class)))

print('Collecting data for class {}'.format(name_class))

done = False
while True:
    ret, frame = cap.read()
    cv2.putText(frame, 'Ready? Press "Q" ! :)', (100, 50), cv2.FONT_HERSHEY_SIMPLEX, 1.3, (0, 0, 0), 3,
                cv2.LINE_AA)
    cv2.imshow('frame', frame)
    if cv2.waitKey(25) == ord('q'):
        break

counter = 0
while counter < dataset_size:
    ret, frame = cap.read()
    cv2.imshow('frame', frame)
    cv2.waitKey(25)
    cv2.imwrite(os.path.join(data_dir, str(name_class), '{}.jpg'.format(counter)), frame)

    counter += 1

cap.release()
cv2.destroyAllWindows()