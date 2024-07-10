import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div style={{ padding: '20px' , textAlign:'left'}}>
            <h1>Welcome to TiffinDaily!</h1>
            <p>Home-Cooked Meals Delivered to Your Doorstep</p>
            <p>At TiffinDaily, we understand the importance of nutritious, home-cooked meals in maintaining a healthy lifestyle. Our mission is to bring the warmth and taste of home-cooked food to your workplace or home, ensuring you never miss a wholesome meal, no matter how busy your day gets.</p>

            <h2>Why Choose TiffinDaily?</h2>
            <ul>
                <li><strong>Authentic Home-Cooked Meals:</strong> Our meals are prepared by experienced home chefs who use fresh, high-quality ingredients to create delicious and nutritious dishes.</li>
                <li><strong>Daily Fresh Deliveries:</strong> Enjoy freshly cooked meals delivered to your doorstep every day, ensuring you get the best taste and nutrition.</li>
                <li><strong>Customizable Plans:</strong> Choose from a variety of meal plans that suit your dietary preferences and schedule. Whether you need daily meals or occasional deliveries, we have a plan for you.</li>
                <li><strong>Convenient Ordering:</strong> Our user-friendly mobile app makes it easy to order your meals, track deliveries, and manage your subscription.</li>
                <li><strong>Affordable Pricing:</strong> We offer competitive pricing without compromising on quality, making healthy eating accessible and affordable.</li>
            </ul>

            <h2>How It Works</h2>
            <ol>
                <li><strong>Sign Up:</strong> Download the TiffinDaily app and create an account.</li>
                <li><strong>Choose Your Plan:</strong> Select a meal plan that fits your needs. We offer daily, weekly, and monthly subscriptions.</li>
                <li><strong>Place Your Order:</strong> Customize your meal preferences and place your order through the app.</li>
                <li><strong>Enjoy Your Meal:</strong> Sit back and relax as we deliver your delicious home-cooked meal right to your doorstep.</li>
            </ol>

            <h2>Our Menu</h2>
            <p>Our diverse menu includes a variety of dishes that cater to different tastes and dietary requirements. From traditional Indian cuisine to contemporary international dishes, our meals are designed to delight your taste buds while providing balanced nutrition.</p>
            <ul>
                <li>Vegetarian and Non-Vegetarian Options</li>
                <li>Vegan and Gluten-Free Choices</li>
                <li>Special Diet Plans</li>
                <li>Healthy Snacks and Beverages</li>
            </ul>

            <h2>Join the TiffinDaily Community</h2>
            <p>Experience the convenience and comfort of home-cooked meals with TiffinDaily. Join our community of satisfied customers who enjoy delicious, nutritious meals every day. Say goodbye to unhealthy fast food and embrace a healthier lifestyle with our tiffin delivery service.</p>

            <h2>Contact Us</h2>
            <p>Have questions or need assistance? Our customer support team is here to help you. Contact us at support@tiffindaily.com or call us at (123) 456-7890.</p>

            <p><strong>Download the TiffinDaily App Today and Start Enjoying Home-Cooked Meals, Delivered Daily!</strong></p>

            <Link to="/privacy">
                <button style={{ padding: '10px 20px', fontSize: '16px' }}>Privacy Policy</button>
            </Link>
        </div>
    );
}

export default About;
