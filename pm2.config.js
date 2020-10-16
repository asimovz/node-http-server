module.exports = {
  apps: [
    {
      name: 'nodeHttpServer', // 应用名称
      script: 'server.js', // 启动文件地址
      cwd: './', // 当前工作路径
      ignore_watch: [
        // 忽视这些目录的变化
        'node_modules',
        'logs',
      ],
      node_args: '--harmony', // node的启动模式
      env: {
        NODE_ENV: 'development', // 设置运行环境，此时process.env.NODE_ENV的值就是development
      },
      env_production: {
        NODE_ENV: 'production',
      },
      out_file: './logs/out.log', // 普通日志路径
      error_file: './logs/err.log', // 错误日志路径
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      instances: 'max' //开启进程数量，根据cpu数量来指定
    }
  ],
};
