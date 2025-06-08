from flask import Flask, render_template, request
import pandas as pd
from sklearn.linear_model import LinearRegression

app = Flask(__name__)

# Dummy dataset
data = {
    'square_footage': [1000, 1500, 2000, 2500, 1800, 2200, 1700, 1400, 2400, 1300],
    'bedrooms': [2, 3, 4, 4, 3, 4, 3, 2, 4, 2],
    'bathrooms': [1, 2, 2, 3, 2, 3, 2, 2, 3, 1],
    'price': [200000, 300000, 400000, 500000, 360000, 470000, 340000, 280000, 490000, 230000]
}
df = pd.DataFrame(data)

# Train model
X = df[['square_footage', 'bedrooms', 'bathrooms']]
y = df['price']
model = LinearRegression()
model.fit(X, y)

@app.route('/', methods=['GET', 'POST'])
def index():
    predicted_price = None
    if request.method == 'POST':
        sqft = float(request.form['sqft'])
        beds = int(request.form['bedrooms'])
        baths = int(request.form['bathrooms'])
        input_data = pd.DataFrame([[sqft, beds, baths]], columns=['square_footage', 'bedrooms', 'bathrooms'])
        predicted_price = round(model.predict(input_data)[0], 2)
    return render_template('index.html', price=predicted_price)

if __name__ == '__main__':
    app.run(debug=True)
