import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Input, Tabs } from "antd";

const MarkdownContainer = styled.div`
  position: relative;
  border: 1px sold red;
  width: 100%;
  min-height: 55px;
  height: 300px;
  background: #f5f5f5;
  overflow: auto;
  line-height: 1.5;
  direction: ltr;
  white-space: pre;
  text-align: left;
  color: #000;
  padding: 8px 10px;
`;

const { TextArea } = Input;
const { TabPane } = Tabs;

const FormTextArea = ({ onChange, plugin, value, ...rest }) => {
  return plugin ? (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Markdown" key="1">
        <TextArea allowClear onChange={onChange} value={value} />
      </TabPane>
      <TabPane tab="Preview" key="2">
        <MarkdownContainer>
          <ReactMarkdown source={value} />
        </MarkdownContainer>
      </TabPane>
    </Tabs>
  ) : (
    <TextArea allowClear onChange={onChange} value={value} />
  );
};

export default FormTextArea;
