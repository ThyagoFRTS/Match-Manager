import React from 'react';
import { categories } from '../../utils/categories';
import { ScrollView } from 'react-native';
import { styles } from './styles';
import Category from '../Category';


type Props = {
    categorySelected: string;
    setCategory: (categoryId: string) => void;
    hasCheckBox?: boolean;
}

const CategorySelect: React.FC<Props> = ({ categorySelected, setCategory, hasCheckBox = false}) => {
    return (
        <ScrollView
            horizontal={true}
            style={styles.container}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }}
        >
            {
                categories.map((category) => {
                    return (
                        <Category
                            key={category.id}
                            title={category.title}
                            icon={category.icon}
                            checked={category.id == categorySelected}
                            onPress={() => {setCategory(category.id)}}
                            hasCheckBox={hasCheckBox}
                        />

                    );
                })
            }
        </ScrollView>
    );
}

export default CategorySelect;