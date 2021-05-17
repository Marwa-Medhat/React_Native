// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { ListGroup } from "react-bootstrap";
// import "font-awesome/css/font-awesome.min.css";
// import { Redirect } from "react-router-dom";
import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      contents: [],
      mark: false,
    };
  }
  // componentDidMount() {
  //   if (localStorage["contents"]) {
  //     let contents = JSON.parse(localStorage["contents"]);
  //     this.setState({ contents: contents });
  //   }
  // }
  // saveToLocalStorage = () => {
  //   localStorage["contents"] = JSON.stringify(this.state.contents);
  // };

  addContent = (content) => {
    this.state.contents.push(content);
    this.setState({ contents: this.state.contents });
    // this.saveToLocalStorage();
  };

  deleteContent = (index) => {
    console.log(index);
    this.state.contents.splice(index, 1);
    this.setState({ contents: this.state.contents });
  };
  markContent = (index) => {
    this.setState({ mark: !this.state.mark });
  };

  render() {
    return (
      <View>
        <Text style={{ textAlign: "center" }}>To Do List</Text>
        <View>
          <DisplayTasks
            contents={this.state.contents}
            mark={this.state.mark}
            deleteContent={this.deleteContent}
            markContent={this.markContent}
          />
        </View>
        <AddTask style={{ textAlign: "center" }} addContent={this.addContent} />
      </View>
    );
  }
}

class AddTask extends React.Component {
  constructor(props) {
    super();
    this.state = {
      content: "",
    };
  }

  addContent = () => {
    let content = {
      content: this.state.content,
    };

    this.props.addContent(content);
  };

  render() {
    return (
      <View>
        <Text>content : </Text>
        <TextInput
          style={styles.input}
          value={this.state.content}
          onChangeText={(e) => this.setState({ content: e })}
        />
        <Button
          onPress={() => this.addContent()}
          className="btn btn-primary "
          style={{ margin: 30 }}
          title="Add"
        ></Button>
      </View>
    );
  }
}

class DisplayTasks extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    let btn_class = this.props.mark ? "blackButton" : "whiteButton";
    {
      let task = this.props.contents.map((item, index) => {
        // console.log(item);
        return (
          <Text>
            <Button
              onPress={() => {
                this.props.markContent(index);
              }}
              title="Done "
              style={{ marginLeft: 400, marginRight: 10, paddingRight: 10 }}
            >
              {/* <i className="fa fa-check "></i> */}
            </Button>
            <Button
              onPress={() => {
                this.props.deleteContent(index);
              }}
              title="Delete"
            >
              {/* <i className="fa fa-times btn-danger"></i> */}
            </Button>
            {item.content}
          </Text>
        );
      });
      console.log(task);
      return <View>{task}</View>;
    }

    // );
  }
}

DisplayTasks.defaultProps = {
  contents: [],
};

class DisplayTask extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return <View></View>;
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 5,
    padding: 10,
  },
  submitButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: "white",
  },
});
export default Todo;
