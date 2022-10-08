import React, { FC } from 'react';
import s from './TermsPage.module.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";


export const TermsPage: FC = () => {
    return (
        <div className={s.page}>
            <div className={s.title}>
                <h1>Terms and policies</h1>
                <p>Quis vulputate facilisis a ullamcorper hausdhausdhuashduasd sit netus neque. Nulla erat mattis donec blandit.</p>
        </div>
        <div className={s.container}>
            <Tabs selectedTabClassName={s.selectedTab} className={s.tabs}>
                <TabList className={s.tabList}>
                    <Tab className={s.tab}>Travel policy</Tab>
                    <Tab className={s.tab}>Car rental policy</Tab>
                    <Tab className={s.tab}>Cookies policy</Tab>
                    <Tab className={s.tab}>Terms of use</Tab>
                    <Tab className={s.tab}>Privacy policy</Tab>
                </TabList>
                <TabPanel className={s.tabPanel}>
                <p>Id id euismod sed quis cursus augue mauris tincidunt. Sed bibendum aliquam vel imperdiet elementum tristique vel. Tortor et,
lorem tortor rutrum nulla netus. Faucibus tincidunt egestas vitae, est mauris non nec. Massa bibendum sed ipsum fames aenean.
Nibh pharetra tristique eu sit velit. Dolor vel amet fringilla mauris ut felis, convallis lectus diam. Sed lacinia pretium, a, pretium.
Orci sed netus odio potenti elit vitae lobortis ultrices suspendisse. Integer aliquam duis dignissim amet augue feugiat eget.
Justo, adipiscing tellus nam ac orci sit commodo, sodales. Mollis fermentum in tristique aliquam.</p>
<p>Eget cursus leo risus malesuada lorem odio porttitor. Felis cursus viverra rhoncus, sit nisi et tincidunt. Urna eu habitasse
adipiscing tellus fringilla. At vulputate turpis velit, molestie. Id phasellus vel quam nibh consectetur. Mattis hendrerit purus ut
pellentesque neque.</p>
<p>Sit vivamus sagittis volutpat ac aliquet auctor platea facilisis in. Sed feugiat metus enim pulvinar pulvinar amet natoque a
gravida. Quam cursus sodales nisi cras fermentum, nisl ornare. Pellentesque nibh elementum morbi est sed mauris. Egestas sed
rhoncus facilisi tempus at rhoncus malesuada. Morbi aenean nunc facilisis cursus. In congue augue nulla nulla facilisis interdum
lorem et lobortis. Commodo porttitor vitae elit mi. Adipiscing urna, sit volutpat ut. Pellentesque velit nunc nunc at nunc et
consectetur enim. Suspendisse porttitor tristique lacus, tristique tincidunt tortor molestie. Mi, odio purus condimentum etiam.</p>
<p>Varius at suspendisse id gravida sit risus fusce. Tellus morbi non egestas venenatis a etiam. Nec interdum faucibus amet aliquam
et adipiscing lectus turpis ut. In dui quis suspendisse in commodo. Integer adipiscing lorem sollicitudin ultricies quam nibh
consectetur. Libero pharetra nunc in aliquam viverra id elementum malesuada. Diam non massa, duis gravida vel aliquet. Aliquet
aliquam morbi diam sed posuere ullamcorper id. Facilisis lorem viverra quam semper viverra tempus. Ullamcorper orci, nisl
pellentesque eget. Non vel faucibus curabitur scelerisque aliquam tincidunt quisque id. Tristique consectetur vitae, sed vulputate
dui dui praesent feugiat praesent.</p>
<p>Dui viverra malesuada habitant lorem tellus purus arcu, metus dolor. Id id purus sed id ipsum sit. Platea urna ligula viverra
euismod morbi risus, eget. Viverra integer egestas praesent amet, consectetur. Tristique turpis dictum et integer augue justo
massa ante.</p>
                </TabPanel>
                <TabPanel className={s.tabPanel}>
                <p>Id id euismod sed quis cursus augue mauris tincidunt. Sed bibendum aliquam vel imperdiet elementum tristique vel. Tortor et,
lorem tortor rutrum nulla netus. Faucibus tincidunt egestas vitae, est mauris non nec. Massa bibendum sed ipsum fames aenean.
Nibh pharetra tristique eu sit velit. Dolor vel amet fringilla mauris ut felis, convallis lectus diam. Sed lacinia pretium, a, pretium.
Orci sed netus odio potenti elit vitae lobortis ultrices suspendisse. Integer aliquam duis dignissim amet augue feugiat eget.
Justo, adipiscing tellus nam ac orci sit commodo, sodales. Mollis fermentum in tristique aliquam.</p>
<p>Eget cursus leo risus malesuada lorem odio porttitor. Felis cursus viverra rhoncus, sit nisi et tincidunt. Urna eu habitasse
adipiscing tellus fringilla. At vulputate turpis velit, molestie. Id phasellus vel quam nibh consectetur. Mattis hendrerit purus ut
pellentesque neque.</p>
<p>Sit vivamus sagittis volutpat ac aliquet auctor platea facilisis in. Sed feugiat metus enim pulvinar pulvinar amet natoque a
gravida. Quam cursus sodales nisi cras fermentum, nisl ornare. Pellentesque nibh elementum morbi est sed mauris. Egestas sed
rhoncus facilisi tempus at rhoncus malesuada. Morbi aenean nunc facilisis cursus. In congue augue nulla nulla facilisis interdum
lorem et lobortis. Commodo porttitor vitae elit mi. Adipiscing urna, sit volutpat ut. Pellentesque velit nunc nunc at nunc et
consectetur enim. Suspendisse porttitor tristique lacus, tristique tincidunt tortor molestie. Mi, odio purus condimentum etiam.</p>
<p>Varius at suspendisse id gravida sit risus fusce. Tellus morbi non egestas venenatis a etiam. Nec interdum faucibus amet aliquam
et adipiscing lectus turpis ut. In dui quis suspendisse in commodo. Integer adipiscing lorem sollicitudin ultricies quam nibh
consectetur. Libero pharetra nunc in aliquam viverra id elementum malesuada. Diam non massa, duis gravida vel aliquet. Aliquet
aliquam morbi diam sed posuere ullamcorper id. Facilisis lorem viverra quam semper viverra tempus. Ullamcorper orci, nisl
pellentesque eget. Non vel faucibus curabitur scelerisque aliquam tincidunt quisque id. Tristique consectetur vitae, sed vulputate
dui dui praesent feugiat praesent.</p>
<p>Dui viverra malesuada habitant lorem tellus purus arcu, metus dolor. Id id purus sed id ipsum sit. Platea urna ligula viverra
euismod morbi risus, eget. Viverra integer egestas praesent amet, consectetur. Tristique turpis dictum et integer augue justo
massa ante.</p>
                </TabPanel>
                <TabPanel className={s.tabPanel}>
                <p>Id id euismod sed quis cursus augue mauris tincidunt. Sed bibendum aliquam vel imperdiet elementum tristique vel. Tortor et,
lorem tortor rutrum nulla netus. Faucibus tincidunt egestas vitae, est mauris non nec. Massa bibendum sed ipsum fames aenean.
Nibh pharetra tristique eu sit velit. Dolor vel amet fringilla mauris ut felis, convallis lectus diam. Sed lacinia pretium, a, pretium.
Orci sed netus odio potenti elit vitae lobortis ultrices suspendisse. Integer aliquam duis dignissim amet augue feugiat eget.
Justo, adipiscing tellus nam ac orci sit commodo, sodales. Mollis fermentum in tristique aliquam.</p>
<p>Eget cursus leo risus malesuada lorem odio porttitor. Felis cursus viverra rhoncus, sit nisi et tincidunt. Urna eu habitasse
adipiscing tellus fringilla. At vulputate turpis velit, molestie. Id phasellus vel quam nibh consectetur. Mattis hendrerit purus ut
pellentesque neque.</p>
<p>Sit vivamus sagittis volutpat ac aliquet auctor platea facilisis in. Sed feugiat metus enim pulvinar pulvinar amet natoque a
gravida. Quam cursus sodales nisi cras fermentum, nisl ornare. Pellentesque nibh elementum morbi est sed mauris. Egestas sed
rhoncus facilisi tempus at rhoncus malesuada. Morbi aenean nunc facilisis cursus. In congue augue nulla nulla facilisis interdum
lorem et lobortis. Commodo porttitor vitae elit mi. Adipiscing urna, sit volutpat ut. Pellentesque velit nunc nunc at nunc et
consectetur enim. Suspendisse porttitor tristique lacus, tristique tincidunt tortor molestie. Mi, odio purus condimentum etiam.</p>
<p>Varius at suspendisse id gravida sit risus fusce. Tellus morbi non egestas venenatis a etiam. Nec interdum faucibus amet aliquam
et adipiscing lectus turpis ut. In dui quis suspendisse in commodo. Integer adipiscing lorem sollicitudin ultricies quam nibh
consectetur. Libero pharetra nunc in aliquam viverra id elementum malesuada. Diam non massa, duis gravida vel aliquet. Aliquet
aliquam morbi diam sed posuere ullamcorper id. Facilisis lorem viverra quam semper viverra tempus. Ullamcorper orci, nisl
pellentesque eget. Non vel faucibus curabitur scelerisque aliquam tincidunt quisque id. Tristique consectetur vitae, sed vulputate
dui dui praesent feugiat praesent.</p>
<p>Dui viverra malesuada habitant lorem tellus purus arcu, metus dolor. Id id purus sed id ipsum sit. Platea urna ligula viverra
euismod morbi risus, eget. Viverra integer egestas praesent amet, consectetur. Tristique turpis dictum et integer augue justo
massa ante.</p>
                </TabPanel>
                <TabPanel className={s.tabPanel}>
                <p>Id id euismod sed quis cursus augue mauris tincidunt. Sed bibendum aliquam vel imperdiet elementum tristique vel. Tortor et,
lorem tortor rutrum nulla netus. Faucibus tincidunt egestas vitae, est mauris non nec. Massa bibendum sed ipsum fames aenean.
Nibh pharetra tristique eu sit velit. Dolor vel amet fringilla mauris ut felis, convallis lectus diam. Sed lacinia pretium, a, pretium.
Orci sed netus odio potenti elit vitae lobortis ultrices suspendisse. Integer aliquam duis dignissim amet augue feugiat eget.
Justo, adipiscing tellus nam ac orci sit commodo, sodales. Mollis fermentum in tristique aliquam.</p>
<p>Eget cursus leo risus malesuada lorem odio porttitor. Felis cursus viverra rhoncus, sit nisi et tincidunt. Urna eu habitasse
adipiscing tellus fringilla. At vulputate turpis velit, molestie. Id phasellus vel quam nibh consectetur. Mattis hendrerit purus ut
pellentesque neque.</p>
<p>Sit vivamus sagittis volutpat ac aliquet auctor platea facilisis in. Sed feugiat metus enim pulvinar pulvinar amet natoque a
gravida. Quam cursus sodales nisi cras fermentum, nisl ornare. Pellentesque nibh elementum morbi est sed mauris. Egestas sed
rhoncus facilisi tempus at rhoncus malesuada. Morbi aenean nunc facilisis cursus. In congue augue nulla nulla facilisis interdum
lorem et lobortis. Commodo porttitor vitae elit mi. Adipiscing urna, sit volutpat ut. Pellentesque velit nunc nunc at nunc et
consectetur enim. Suspendisse porttitor tristique lacus, tristique tincidunt tortor molestie. Mi, odio purus condimentum etiam.</p>
<p>Varius at suspendisse id gravida sit risus fusce. Tellus morbi non egestas venenatis a etiam. Nec interdum faucibus amet aliquam
et adipiscing lectus turpis ut. In dui quis suspendisse in commodo. Integer adipiscing lorem sollicitudin ultricies quam nibh
consectetur. Libero pharetra nunc in aliquam viverra id elementum malesuada. Diam non massa, duis gravida vel aliquet. Aliquet
aliquam morbi diam sed posuere ullamcorper id. Facilisis lorem viverra quam semper viverra tempus. Ullamcorper orci, nisl
pellentesque eget. Non vel faucibus curabitur scelerisque aliquam tincidunt quisque id. Tristique consectetur vitae, sed vulputate
dui dui praesent feugiat praesent.</p>
<p>Dui viverra malesuada habitant lorem tellus purus arcu, metus dolor. Id id purus sed id ipsum sit. Platea urna ligula viverra
euismod morbi risus, eget. Viverra integer egestas praesent amet, consectetur. Tristique turpis dictum et integer augue justo
massa ante.</p>
                </TabPanel>
                <TabPanel className={s.tabPanel}>
                <p>Id id euismod sed quis cursus augue mauris tincidunt. Sed bibendum aliquam vel imperdiet elementum tristique vel. Tortor et,
lorem tortor rutrum nulla netus. Faucibus tincidunt egestas vitae, est mauris non nec. Massa bibendum sed ipsum fames aenean.
Nibh pharetra tristique eu sit velit. Dolor vel amet fringilla mauris ut felis, convallis lectus diam. Sed lacinia pretium, a, pretium.
Orci sed netus odio potenti elit vitae lobortis ultrices suspendisse. Integer aliquam duis dignissim amet augue feugiat eget.
Justo, adipiscing tellus nam ac orci sit commodo, sodales. Mollis fermentum in tristique aliquam.</p>
<p>Eget cursus leo risus malesuada lorem odio porttitor. Felis cursus viverra rhoncus, sit nisi et tincidunt. Urna eu habitasse
adipiscing tellus fringilla. At vulputate turpis velit, molestie. Id phasellus vel quam nibh consectetur. Mattis hendrerit purus ut
pellentesque neque.</p>
<p>Sit vivamus sagittis volutpat ac aliquet auctor platea facilisis in. Sed feugiat metus enim pulvinar pulvinar amet natoque a
gravida. Quam cursus sodales nisi cras fermentum, nisl ornare. Pellentesque nibh elementum morbi est sed mauris. Egestas sed
rhoncus facilisi tempus at rhoncus malesuada. Morbi aenean nunc facilisis cursus. In congue augue nulla nulla facilisis interdum
lorem et lobortis. Commodo porttitor vitae elit mi. Adipiscing urna, sit volutpat ut. Pellentesque velit nunc nunc at nunc et
consectetur enim. Suspendisse porttitor tristique lacus, tristique tincidunt tortor molestie. Mi, odio purus condimentum etiam.</p>
<p>Varius at suspendisse id gravida sit risus fusce. Tellus morbi non egestas venenatis a etiam. Nec interdum faucibus amet aliquam
et adipiscing lectus turpis ut. In dui quis suspendisse in commodo. Integer adipiscing lorem sollicitudin ultricies quam nibh
consectetur. Libero pharetra nunc in aliquam viverra id elementum malesuada. Diam non massa, duis gravida vel aliquet. Aliquet
aliquam morbi diam sed posuere ullamcorper id. Facilisis lorem viverra quam semper viverra tempus. Ullamcorper orci, nisl
pellentesque eget. Non vel faucibus curabitur scelerisque aliquam tincidunt quisque id. Tristique consectetur vitae, sed vulputate
dui dui praesent feugiat praesent.</p>
<p>Dui viverra malesuada habitant lorem tellus purus arcu, metus dolor. Id id purus sed id ipsum sit. Platea urna ligula viverra
euismod morbi risus, eget. Viverra integer egestas praesent amet, consectetur. Tristique turpis dictum et integer augue justo
massa ante.</p>
                </TabPanel>
            </Tabs>
        </div>
        </div>
    );
};
