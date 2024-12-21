import React, { useEffect } from 'react';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Verify = () => {
    const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext);
    const [searchParams] = useSearchParams();

    const success = searchParams.get('success');
    const orderId = searchParams.get('orderId');

    const verifyPayment = async () => {
        if (!token) {
            toast.error('User not authenticated. Please log in.');
            navigate('/login');
            return;
        }

        try {
            const response = await axios.post(
                `${backendUrl}/api/order/verifyStripe`,
                { success, orderId },
                { headers: { Authorization: `Bearer ${token}` } } // Correct token format
            );

            if (response.data.success) {
                setCartItems({});
                toast.success('Payment verified successfully!');
                navigate('/orders');
            } else {
                toast.error('Payment verification failed.');
                navigate('/cart');
            }
        } catch (error) {
            console.error('Payment verification error:', error);
            toast.error('An error occurred while verifying payment.');
        }
    };

    useEffect(() => {
        verifyPayment();
        // Cleanup function to avoid memory leaks
        return () => {
            toast.dismiss(); // Dismiss any lingering toasts
        };
    }, [token]);

    return (
        <div>
            <p>Verifying payment, please wait...</p>
        </div>
    );
};

export default Verify;
