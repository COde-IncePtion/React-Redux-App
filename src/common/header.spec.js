import React from "react";
import Header from "./header";
import {mount} from "enzyme";
import {MemoryRouter} from "react-router-dom";


it('should render header', () => {
    const component = mount(
        <MemoryRouter>
            <Header/>
        </MemoryRouter>
    );

    expect(component.find("a").length).toBe(3);
});




