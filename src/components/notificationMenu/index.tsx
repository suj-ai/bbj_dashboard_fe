import { Button, Col, Row, Skeleton } from "antd";
import { notificationMenu } from "../../constants/notificationConstants";

export interface notificationMenu {
  isLoading: boolean;
}

function NotificationMenu({ isLoading }: notificationMenu) {
  return (
    <Col className="absolute bg-white w-[500px] h-[670px] top-[70px] right-[20px] z-20 rounded-lg drop-shadow-md">
      <Col className="bg-primary rounded-t-lg relative">
        <span className="text-white font-semibold text-base pl-[16px]">
          All Notifications
        </span>
        <span className="w-[12px] h-[12px] rounded bg-primayAlert p-1 text-white text-[10px] ml-[10px]">
          2
        </span>
        <div className="w-[20px] h-[20px] bg-primary absolute top-[-6px] bottom-0 rounded-[5px] origin-center rotate-45 left-[281px]"></div>
      </Col>
      <Col className="h-[510px] overflow-auto">
        {isLoading ? (
          <>
            {notificationMenu?.map((item) => (
              <Col className="pt-[16px] pr-[16px] pb-[16px] pl-[16px] border-b border-b-[#BBBBBB] border-solid border-t-0 border-l-0 border-r-0 overflow-auto">
                <Row className="flex items-center justify-between">
                  <div className="flex items-center">
                    {item?.isRead ? null : (
                      <span className="w-[8px] h-[8px] rounded-[1000px] bg-primary"></span>
                    )}
                    <span
                      className={`text-black font-semibold text-base ${
                        item?.isRead ? "pl-[16px]" : "pl-[10px]"
                      }`}
                    >
                      {item?.notificationTitle}
                    </span>
                  </div>

                  <span className="text-greyPrimary font-semibold text-xs pl-[16px]">
                    {item?.dateTime}
                  </span>
                </Row>
                <Row className="mt-[10px]">
                  <span className="text-primary font-semibold text-sm pl-[16px]">
                    {item?.notificationSubTitle}
                  </span>
                  <span className="text-greyPrimary font-normal text-sm pl-[16px] mt-[4px]">
                    {item?.notificationDescription}
                  </span>
                </Row>
              </Col>
            ))}
          </>
        ) : (
          <Col className="p-4">
            <Skeleton loading={true} avatar active />
            <Skeleton loading={true} avatar active />
            <Skeleton loading={true} avatar active />
            <Skeleton loading={true} avatar active />
          </Col>
        )}
      </Col>
      <Col className="bg-white flex items-center justify-center px-[153px] py-[32px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_0px_0px_rgba(17,17,26,0.1),_0px_0px_0px_rgba(17,17,26,0.1)] rounded-b">
        <Button type="primary">See all notifications</Button>
      </Col>
    </Col>
  );
}

export default NotificationMenu;
