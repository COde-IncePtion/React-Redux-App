import React from 'react';
import AddCoursePage from './addCoursePage';
import {shallow} from 'enzyme';

function renderAddCoursePage(args) {
    const defaultProps = {
        course: {},
        authors: [],
        onChange: () => {
        },
        onSave: () => {
        },
        saving: false
    };
    const props = {...defaultProps, ...args};
    return shallow(<AddCoursePage {...props}/>);
};


it('should render add course page', () => {
    const component = renderAddCoursePage();
    expect(component.find('form').length).toBe(1);
    expect(component.find('h1').text()).toBe("Add Course Form");
});

it('should label save btn as "Save" when not saving',()=>{
    const compnent = renderAddCoursePage();
    expect(compnent.find(".btn-primary").text()).toBe("Save");
});

it('should label save btn as "Saving..." when saving is in progress',()=>{
    const compnent = renderAddCoursePage({saving: true});
    expect(compnent.find(".btn-primary").text()).toBe("Saving...");
});

