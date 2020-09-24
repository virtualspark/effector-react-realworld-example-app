import React from 'react';
import { Page, Row, Button } from 'ui';
import { AddTagForm } from './add-tag-form';
import { Form } from './form';
import { TagList } from './tag-list';

import '../model/init';

export const EditorPage: React.FC = () => (
  <Page>
    <Row>
      <div className="col-md-10 offset-md-1 col-xs-12">
        <Form />
        <AddTagForm />
        <TagList />

        <Button
          type="submit"
          form="editor"
          className="btn-lg pull-xs-right btn-primary">
          Publish article
        </Button>
      </div>
    </Row>
  </Page>
);
