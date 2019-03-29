import React from "react";
import {connect} from "react-redux";
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from "redux";
import AddCourserPage from "./addCoursePage";
import * as apiActions from "../../actions/apiActions";

class ManageCoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            course: {
                title: "",
                authorId: 2,
                category: ""
            },
            saving: false
        };
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        debugger;
        if (this.props.apiCallsInProgress > 0)
            debugger;
        if (!this.props.saving)
            debugger;
        if (this.props.apiCallsInProgress === 0 && this.state.saving)
            this.props.history.push('/courses');
    }

    render() {
        return (
            <div>
                <AddCourserPage course={this.state.course} onSave={this.onSave} onChange={this.onChange}
                                saving={this.state.saving}/>
            </div>
        );
    }

    onChange(event) {
        let field = event.target.name;
        let value = event.target.value;
        let course = this.state.course;
        course[field] = value;
        this.setState({course: course});
    }

    onSave(event) {
        event.preventDefault();
        this.setState({saving: true});
        this.props.apiActions.startApiCall();
        this.props.courseActions.createCourse(this.state.course);
    }
};


function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses,
        apiCallsInProgress: state.apiCallsInProgress
    };
}

function mapDispatchToProps(dispatch) {
    return {
        courseActions: bindActionCreators(courseActions, dispatch),
        apiActions: bindActionCreators(apiActions, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursesPage);