import { React } from 'react';
import './cardentry.css';

import TextInput from '../../Forms/TextInput';

const PaymentInfo = ({ card, setCard }) => {
    return (
        <div className='w-100'>
            <h3>Card Information</h3>

            <div className='flex flex-column gap-1'>
                <TextInput required={true} label='Name of Cardholder' fieldName='name' state={card} setState={setCard} />
                <TextInput required={true} label='Card Number' fieldName='number' state={card} setState={setCard} />

                <div className='flex flex-row justify-content-between border-box'>
                    <div className='col-6'>
                        <TextInput required={true} label='Expiration Date' fieldName='expiration' state={card} setState={setCard} />
                    </div>
                    <div className='col-6'>
                        <TextInput required={true} label='CVV' fieldName='cvv' state={card} setState={setCard} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PaymentInfo;