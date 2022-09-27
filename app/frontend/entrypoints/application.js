import "./main.scss";

import React, {createElement} from 'react';
import { createRoot } from 'react-dom/client';
import Main from '@/components/views/main';

const domContainer = document.getElementById('main');
const home = createRoot(domContainer);
home.render(createElement(Main));
