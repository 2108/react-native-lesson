
import React, {Component} from 'react'
import {
  Platform,
  StyleSheet,
  StatusBar,
  Text,
  View
} from 'react-native'
import PropTypes from 'prop-types'
// import styles from './styles'
const NAVBAR_HEIGHT_IOS = 44
const NAVBAR_HEIGHT_ANDROID = 50
const STATUS_BAR_HEIGHT_IOS = 20

export default class NavigationBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      hiden: false
    }
  }
  render () {
    const statusBar = <View style={[styles.statusBar, this.props.statusBar]}>
      <StatusBar {...this.props.statusBar} />
    </View>
    const titleView = this.props.titleView ? this.props.titleView
    : <Text style={styles.title}>{this.props.title}</Text>
    const content = <View style={styles.navBar}>
      {this.props.leftButton}
      <View style={styles.titleViewContainer}>
        {titleView}
      </View>
      {this.props.rightButton}
    </View>
    return (
      <View style={[styles.container, this.props.style]}>
        {statusBar}
        {content}
      </View>
    )
  }
}
NavigationBar.defaultProps = {
  statusBar: {
    barStyle: 'default',
    hidden: false
  }
}
NavigationBar.propTypes = {
  style: PropTypes.style,
  title: PropTypes.string,
  titleView: PropTypes.element,
  hide: PropTypes.bool,
  leftButton: PropTypes.element,
  rightButton: PropTypes.element,
  statusBar: PropTypes.shape({
    backgroundColor: PropTypes.string,
    barStyle: PropTypes.oneOf('light-content', 'default', 'dark-content'),
    hidden: PropTypes.bool
  })
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    flex: 1
  },
  statusBar: {
    height: Platform.OS === 'ios' ? STATUS_BAR_HEIGHT_IOS : 0
  },
  navBar: {
    width: 'auto',
    height: Platform.OS === 'ios' ? NAVBAR_HEIGHT_IOS : NAVBAR_HEIGHT_ANDROID,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'red',
    flexDirection: 'row'
  },
  titleViewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 40,
    right: 40
  },
  title: {
    fontSize: 20,
    color: '#fff'
  },
  word: {
    backgroundColor: 'red'
  }
})
