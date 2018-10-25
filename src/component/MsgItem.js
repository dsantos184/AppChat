import React, {Component} from 'react';
import{
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class MsgItem extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {};

        this.estilo = styles.balaoEsquerda;

        if( props.dados.my )
        {
            this.estilo = styles.balaoDireita;
        }
    }    

    render()
    {
        const {dados} = this.props;
        return(
            <View style={[styles.containerMensagem, this.estilo]}>
                <Text style={styles.nome}>{dados.nome}:</Text>
                <Text style={styles.mensagem}>{dados.mensagem}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    containerMensagem:
    {
        backgroundColor: "#CCCCCC",
        margin: 10,
        padding: 10,
        borderRadius: 10,
    },

    balaoEsquerda:
    {
        backgroundColor: '#FFFFFF',
        alignSelf: 'flex-start',
        marginRight: 50,
    },

    balaoDireita:
    {
        backgroundColor: '#00FF00',
        alignSelf: 'flex-end',
        marginLeft: 50,
    },

    nome:
    {
        fontSize: 15,
        fontWeight: 'bold',
    }
});