import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Feather";
import { AreaButtons, AreaInput, AreaLocation, Container, Input, TextLocation } from './styles';

export const Header: React.FC  = ()  =>{
    return (
        <>
            <Container>
                <AreaButtons>
                    <TouchableOpacity>
                        <Icon name="menu" size={20} />
                    </TouchableOpacity>
                    
                    <AreaInput>
                        <Input placeholder="Buscar no Mercado Livre" />
                    </AreaInput>

                    <TouchableOpacity>
                        <Icon name="shopping-cart" size={20} />
                    </TouchableOpacity>
                </AreaButtons>

                <AreaLocation>
                    <Icon style={{ marginRight: 5 }} name="map-pin" size={15} color="#7B7B81"/>
                    <TextLocation>Informe seu CEP</TextLocation>
                    <Icon name="arrow-right" size={15} color="#7B7B81"/>
                </AreaLocation>
            </Container>

        </>
    );
}