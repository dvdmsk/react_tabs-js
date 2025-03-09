import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  let activeTab = activeTabId;

  if (!tabs.find(tab => tab.id === activeTabId)) {
    activeTab = tabs[0].id;
    onTabSelected(activeTab);
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isActive = activeTab === tab.id;

            return (
              <li
                className={cn({ 'is-active': isActive })}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (activeTab === tab.id) return;
                    onTabSelected(tab.id);
                  }}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === activeTab).content}
      </div>
    </div>
  );
};
