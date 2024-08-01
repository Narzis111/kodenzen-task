import { useState } from 'react';
import CustomSelect from '../../components/CustomSelect/CustomSelect';
import { Helmet } from 'react-helmet-async';

const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3', group: 'Group 1' },
    { label: 'Option 4', value: 'option4', group: 'Group 1' },
    { label: 'Option 5', value: 'option5', group: 'Group 2' },
];

const Home = () => {
    const [selectedValue, setSelectedValue] = useState([]);

    const handleChange = (value) => {
        setSelectedValue(value);
    };

    const handleMenuOpen = () => {
        console.log('Menu opened');
    };

    const handleSearch = (searchText) => {
        console.log('Search text:', searchText);
    };

    return (
        <>
            <Helmet>
                <title>
                    Kodenzen-task | Home
                </title>
            </Helmet>
            <div>

                <div className="parent-container">
                    <div className="kzui-select">
                        <CustomSelect
                            title="Select an Option"
                            isClearable
                            isSearchable
                            options={options}
                            value={selectedValue}
                            placeholder="Select an option"
                            isGrouped
                            isMulti
                            onChangeHandler={handleChange}
                            onMenuOpen={handleMenuOpen}
                            onSearchHandler={handleSearch}
                        />
                    </div>
                </div>

            </div>

        </>
    );
};

export default Home;

