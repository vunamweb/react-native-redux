import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import store from '../store';


class Child extends Component {
    constructor(props) {
        super(props);
        console.log("Constructor");
    }

    render() {
        //console.log("child", state.counter);

        return (
            <View>
                <Text style = {styles.text} >{this.props.counter.value}</Text>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    counter: state.counter
});

export default connect(mapStateToProps, null)(Child);
//export default Child;

const styles =StyleSheet.create({
    text: {
        fontSize: 100,
        color:'#000',
    }
});